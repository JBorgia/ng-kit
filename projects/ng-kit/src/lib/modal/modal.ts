import { ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';

import { NgkModalConfig, NgkModalOptions } from './modal-config';
import { NgkModalRef } from './modal-ref';
import { NgkModalStack } from './modal-stack';

/**
 * A service for opening modal windows.
 *
 * Creating a modal is straightforward: create a component or a template and pass it as an argument to
 * the `.open()` method.
 */
@Injectable({ providedIn: 'root' })
export class NgkModal {
  constructor(
    private _moduleCFR: ComponentFactoryResolver, private _injector: Injector, private _modalStack: NgkModalStack,
    private _config: NgkModalConfig, private router: Router) {

    // Close all open modals on route change
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (this.hasOpenModals()) {
          this.dismissAll();
        }
      }
    });

  }

  /**
   * Opens a new modal window with the specified content and supplied options.
   *
   * Content can be provided as a `TemplateRef` or a component type. If you pass a component type as content,
   * then instances of those components can be injected with an instance of the `NgkActiveModal` class. You can then
   * use `NgkActiveModal` methods to close / dismiss modals from "inside" of your component.
   *
   */
  open(content: any, options: NgkModalOptions = {}): NgkModalRef {
    const combinedOptions = Object.assign({}, this._config, options);
    return this._modalStack.open(this._moduleCFR, this._injector, content, combinedOptions);
  }

  /**
   * Dismisses all currently displayed modal windows with the supplied reason.
   *
   * @since 3.1.0
   */
  dismissAll(reason?: any) { this._modalStack.dismissAll(reason); }

  /**
   * Indicates if there are currently any open modal windows in the application.
   *
   * @since 3.3.0
   */
  hasOpenModals(): boolean { return this._modalStack.hasOpenModals(); }
}
