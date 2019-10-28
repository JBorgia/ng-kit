import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Inject,
  Injectable,
  Injector,
  RendererFactory2,
  TemplateRef,
} from '@angular/core';
import { Subject } from 'rxjs';

import { focusTrap } from '../util/focus-trap';
import { ContentRef } from '../util/popup';
import { ScrollBar } from '../util/scrollbar';
import { isDefined, isString } from '../util/util';
import { NgKitModalBackdropComponent } from './modal-backdrop.component';
import { NgKitActiveModal, NgKitModalRef } from './modal-ref';
import { NgKitModalWindowComponent } from './modal-window.component';

@Injectable({ providedIn: 'root' })
export class NgKitModalStack {
  private _activeWindowCmptHasChanged = new Subject();
  private _ariaHiddenValues: Map<Element, string> = new Map();
  private _backdropAttributes = ['backdropClass', 'lightboxMode'];
  private _modalRefs: NgKitModalRef[] = [];
  private _windowAttributes = [
    'ariaLabelledBy', 'backdrop', 'centered', 'keyboard', 'size', 'scrollable', 'windowClass', 'lightboxMode'
  ];
  private _windowCmpts: ComponentRef<NgKitModalWindowComponent>[] = [];

  constructor(
    private _applicationRef: ApplicationRef, private _injector: Injector, @Inject(DOCUMENT) private _document: any,
    private _scrollBar: ScrollBar, private _rendererFactory: RendererFactory2) {
    // Trap focus on active WindowCmpt
    this._activeWindowCmptHasChanged.subscribe(() => {
      if (this._windowCmpts.length) {
        const activeWindowCmpt = this._windowCmpts[this._windowCmpts.length - 1];
        focusTrap(activeWindowCmpt.location.nativeElement, this._activeWindowCmptHasChanged);
        this._revertAriaHidden();
        this._setAriaHidden(activeWindowCmpt.location.nativeElement);
      }
    });
  }

  open(moduleCFR: ComponentFactoryResolver, contentInjector: Injector, content: any, options): NgKitModalRef {
    const containerEl =
      isDefined(options.container) ? this._document.querySelector(options.container) : this._document.body;
    const renderer = this._rendererFactory.createRenderer(null, null);

    // const revertPaddingForScrollBar = this._scrollBar.compensate();
    const removeBodyClass = () => {
      if (!this._modalRefs.length) {
        renderer.removeClass(this._document.body, 'modal-open');
        this._revertAriaHidden();
      }
    };

    if (!containerEl) {
      throw new Error(`The specified modal container "${options.container || 'body'}" was not found in the DOM.`);
    }

    const activeModal = new NgKitActiveModal();
    const contentRef = this._getContentRef(moduleCFR, options.injector || contentInjector, content, activeModal);

    const backdropCmptRef: ComponentRef<NgKitModalBackdropComponent> =
      options.backdrop !== false ? this._attachBackdrop(moduleCFR, containerEl) : null;
    const windowCmptRef: ComponentRef<NgKitModalWindowComponent> = this._attachWindowComponent(moduleCFR, containerEl, contentRef);
    const xmModalRef: NgKitModalRef = new NgKitModalRef(windowCmptRef, contentRef, backdropCmptRef, options.beforeDismiss);

    this._registerModalRef(xmModalRef);
    this._registerWindowCmpt(windowCmptRef);
    // xmModalRef.result.then(revertPaddingForScrollBar, revertPaddingForScrollBar);
    xmModalRef.result.then(removeBodyClass, removeBodyClass);
    activeModal.close = (result: any) => { xmModalRef.close(result); };
    activeModal.dismiss = (reason: any) => { xmModalRef.dismiss(reason); };

    this._applyWindowOptions(windowCmptRef.instance, options);
    if (this._modalRefs.length === 1) {
      renderer.addClass(this._document.body, 'modal-open');
    }

    if (backdropCmptRef && backdropCmptRef.instance) {
      this._applyBackdropOptions(backdropCmptRef.instance, options);
    }

    return xmModalRef;
  }

  dismissAll(reason?: any) { this._modalRefs.forEach(xmModalRef => xmModalRef.dismiss(reason)); }

  hasOpenModals(): boolean { return this._modalRefs.length > 0; }

  private _attachBackdrop(moduleCFR: ComponentFactoryResolver, containerEl: any): ComponentRef<NgKitModalBackdropComponent> {
    const backdropFactory = moduleCFR.resolveComponentFactory(NgKitModalBackdropComponent);
    const backdropCmptRef = backdropFactory.create(this._injector);
    this._applicationRef.attachView(backdropCmptRef.hostView);
    containerEl.appendChild(backdropCmptRef.location.nativeElement);
    return backdropCmptRef;
  }

  private _attachWindowComponent(moduleCFR: ComponentFactoryResolver, containerEl: any, contentRef: any):
    ComponentRef<NgKitModalWindowComponent> {
    const windowFactory = moduleCFR.resolveComponentFactory(NgKitModalWindowComponent);
    const windowCmptRef = windowFactory.create(this._injector, contentRef.nodes);
    this._applicationRef.attachView(windowCmptRef.hostView);
    containerEl.appendChild(windowCmptRef.location.nativeElement);
    return windowCmptRef;
  }

  private _applyWindowOptions(windowInstance: NgKitModalWindowComponent, options: Object): void {
    this._windowAttributes.forEach((optionName: string) => {
      if (isDefined(options[optionName])) {
        windowInstance[optionName] = options[optionName];
      }
    });
  }

  private _applyBackdropOptions(backdropInstance: NgKitModalBackdropComponent, options: Object): void {
    this._backdropAttributes.forEach((optionName: string) => {
      if (isDefined(options[optionName])) {
        backdropInstance[optionName] = options[optionName];
      }
    });
  }

  private _getContentRef(
    moduleCFR: ComponentFactoryResolver, contentInjector: Injector, content: any,
    activeModal: NgKitActiveModal): ContentRef {
    if (!content) {
      return new ContentRef([]);
    } else if (content instanceof TemplateRef) {
      return this._createFromTemplateRef(content, activeModal);
    } else if (isString(content)) {
      return this._createFromString(content);
    } else {
      return this._createFromComponent(moduleCFR, contentInjector, content, activeModal);
    }
  }

  private _createFromTemplateRef(content: TemplateRef<any>, activeModal: NgKitActiveModal): ContentRef {
    const context = {
      $implicit: activeModal,
      close(result) { activeModal.close(result); },
      dismiss(reason) { activeModal.dismiss(reason); }
    };
    const viewRef = content.createEmbeddedView(context);
    this._applicationRef.attachView(viewRef);
    return new ContentRef([viewRef.rootNodes], viewRef);
  }

  private _createFromString(content: string): ContentRef {
    const component = this._document.createTextNode(`${content}`);
    return new ContentRef([[component]]);
  }

  private _createFromComponent(
    moduleCFR: ComponentFactoryResolver, contentInjector: Injector, content: any,
    context: NgKitActiveModal): ContentRef {
    const contentCmptFactory = moduleCFR.resolveComponentFactory(content);
    const modalContentInjector =
      Injector.create({ providers: [{ provide: NgKitActiveModal, useValue: context }], parent: contentInjector });
    const componentRef = contentCmptFactory.create(modalContentInjector);
    this._applicationRef.attachView(componentRef.hostView);
    return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
  }

  private _setAriaHidden(element: Element) {
    const parent = element.parentElement;
    if (parent && element !== this._document.body) {
      Array.from(parent.children).forEach(sibling => {
        if (sibling !== element && sibling.nodeName !== 'SCRIPT') {
          this._ariaHiddenValues.set(sibling, sibling.getAttribute('aria-hidden'));
          sibling.setAttribute('aria-hidden', 'true');
        }
      });

      this._setAriaHidden(parent);
    }
  }

  private _revertAriaHidden() {
    this._ariaHiddenValues.forEach((value, element) => {
      if (value) {
        element.setAttribute('aria-hidden', value);
      } else {
        element.removeAttribute('aria-hidden');
      }
    });
    this._ariaHiddenValues.clear();
  }

  private _registerModalRef(xmModalRef: NgKitModalRef) {
    const unregisterModalRef = () => {
      const index = this._modalRefs.indexOf(xmModalRef);
      if (index > -1) {
        this._modalRefs.splice(index, 1);
      }
    };
    this._modalRefs.push(xmModalRef);
    xmModalRef.result.then(unregisterModalRef, unregisterModalRef);
  }

  private _registerWindowCmpt(xmWindowCmpt: ComponentRef<NgKitModalWindowComponent>) {
    this._windowCmpts.push(xmWindowCmpt);
    this._activeWindowCmptHasChanged.next();

    xmWindowCmpt.onDestroy(() => {
      const index = this._windowCmpts.indexOf(xmWindowCmpt);
      if (index > -1) {
        this._windowCmpts.splice(index, 1);
        this._activeWindowCmptHasChanged.next();
      }
    });
  }
}
