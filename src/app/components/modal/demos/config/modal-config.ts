import { Component } from '@angular/core';
import { NgKitModal, NgKitModalConfig } from 'ng-kit';

@Component({
  selector: 'app-modal-config',
  templateUrl: './modal-config.html',
  // add NgKitModalConfig and NgKitModal to the component providers
  providers: [
    NgKitModalConfig,
    NgKitModal
  ]
})
export class ModalConfigComponent {
  constructor(config: NgKitModalConfig, private modalService: NgKitModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
  }
}

