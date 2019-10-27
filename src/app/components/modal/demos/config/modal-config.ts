import { Component } from '@angular/core';
import { XmModal, XmModalConfig } from 'ng-kit';

@Component({
  selector: 'app-modal-config',
  templateUrl: './modal-config.html',
  // add XmModalConfig and XmModal to the component providers
  providers: [
    XmModalConfig,
    XmModal
  ]
})
export class ModalConfigComponent {
  constructor(config: XmModalConfig, private modalService: XmModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
  }
}

