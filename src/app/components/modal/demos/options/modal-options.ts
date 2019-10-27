import { Component, ViewEncapsulation } from '@angular/core';
import { XmModal } from 'ng-kit';

@Component({
  selector: 'app-modal-options',
  templateUrl: './modal-options.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./modal-options.scss']
})
export class ModalOptionsComponent {
  closeResult: string;
  modalTitle: string = 'Default title';

  constructor(private modalService: XmModal) { }

  openBackDropCustomClass(content) {
    this.modalService.open(content, { backdropClass: 'orange-backdrop' });
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'orange-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }

  updateModalTitle(title: string): void {
    this.modalTitle = title;
  }
}
