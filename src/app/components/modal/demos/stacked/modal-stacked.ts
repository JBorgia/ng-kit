import { Component } from '@angular/core';
import { XmActiveModal, XmModal } from 'ng-kit';

@Component({
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Stacked modals (2)</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <i class="icon-close"></i>
      </button>
    </div>
    <div class="modal-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div class="modal-footer">
      <button xm class="ng-kit-md ng-kit-secondary" (click)="activeModal.close('Close click')">Close this modal</button>
    </div>
  `
})
export class Modal2ContentComponent {
  constructor(public activeModal: XmActiveModal) { }
}

@Component({
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Stacked modals (1)</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <i class="icon-close"></i>
      </button>
    </div>
    <div class="modal-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>      
    </div>
    <div class="modal-footer">
      <button xm class="ng-kit-md ng-kit-primary" (click)="open()">Launch demo modal</button>
      <button xm class="ng-kit-md ng-kit-secondary" (click)="activeModal.close('Close click')">Close this modal</button>
    </div>
  `,
  styles: [`
    .modal-footer {
      display: flex;
    }
    .modal-footer button:first-of-type {
      margin-right: 0.8em;
    }
  `]
})
export class Modal1ContentComponent {
  constructor(private modalService: XmModal, public activeModal: XmActiveModal) { }

  open() {
    this.modalService.open(Modal2ContentComponent, {
      size: 'lg'
    });
  }
}

@Component({
  selector: 'app-modal-stacked',
  templateUrl: './modal-stacked.html',
  styleUrls: ['./modal-stacked.scss']
})
export class ModalStackedComponent {
  constructor(private modalService: XmModal) { }

  open() {
    this.modalService.open(Modal1ContentComponent);
  }
}
