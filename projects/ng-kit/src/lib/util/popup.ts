import {
  ComponentFactoryResolver,
  ComponentRef,
  Injector,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
  ViewRef,
} from '@angular/core';

export class ContentRef {
  constructor(public nodes: any[], public viewRef?: ViewRef, public componentRef?: ComponentRef<any>) { }
}

export class PopupService<T> {
  private _windowRef: ComponentRef<T>;
  private _contentRef: ContentRef;

  constructor(
    private _type: any, private _injector: Injector, private _viewContainerRef: ViewContainerRef,
    private _renderer: Renderer2, private _componentFactoryResolver: ComponentFactoryResolver) { }

  open(content?: string | TemplateRef<any>, context?: any): ComponentRef<T> {
    if (!this._windowRef) {
      this._contentRef = this._getContentRef(content, context);
      this._windowRef = this._viewContainerRef.createComponent(
        this._componentFactoryResolver.resolveComponentFactory<T>(this._type), 0, this._injector,
        this._contentRef.nodes);
    }

    return this._windowRef;
  }

  close() {
    if (this._windowRef) {
      this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._windowRef.hostView));
      this._windowRef = null;

      if (this._contentRef.viewRef) {
        this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        this._contentRef = null;
      }
    }
  }

  private _getContentRef(content: string | TemplateRef<any>, context?: any): ContentRef {
    if (!content) {
      return new ContentRef([]);
    } else if (content instanceof TemplateRef) {
      const viewRef = this._viewContainerRef.createEmbeddedView(<TemplateRef<T>>content, context);
      return new ContentRef([viewRef.rootNodes], viewRef);
    } else {
      return new ContentRef([[this._renderer.createText(`${content}`)]]);
    }
  }
}
