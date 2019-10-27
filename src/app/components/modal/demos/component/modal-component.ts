import { Component, Input } from '@angular/core';
import { XmActiveModal, XmModal } from 'ng-kit';

@Component({
  selector: 'app-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Components as content</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <i class="icon-close"></i>
      </button>
    </div>
    <div class="modal-body">
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
consectetur, adipisci velit Ut enim ad minima veniam, quis
nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
ea commodi consequatur?</p><p>Quis autem vel eum iure reprehenderit qui in ea
voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem
eum fugiat quo voluptas nulla pariatur?</p>
    </div>
    <div class="modal-footer">
      <button 
        xm
        class="ng-kit-md ng-kit-secondary"
        (click)="activeModal.close('Close click')">
        Close this modal
      </button>
    </div>
  `,
  styles: [`
    p {
      margin-bottom: 0.8em;
    }
    p:last-of-type {
      margin-bottom: 0;
    }
    .modal-body {
      padding: 1.2em;
    }
    .modal-footer {
      padding: 0 1.2em 1.2em 1.2em;
    }
  `]
})
export class ModalContentComponent {
  @Input() name;

  constructor(public activeModal: XmActiveModal) { }
}

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.html',
  styleUrls: ['./modal-component.scss']
})
export class ModalComponent {
  constructor(private modalService: XmModal) { }

  open() {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.name = 'World';
  }
}
