import { Component } from '@angular/core';
import { NgkModal, NgkModalConfig } from 'ng-kit';

@Component({
  selector: 'app-modal-config',
  templateUrl: './modal-config.html',
  // add NgkModalConfig and NgkModal to the component providers
  providers: [
    NgkModalConfig,
    NgkModal
  ]
})
export class ModalConfigComponent {
  constructor(config: NgkModalConfig, private modalService: NgkModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
  }
}

