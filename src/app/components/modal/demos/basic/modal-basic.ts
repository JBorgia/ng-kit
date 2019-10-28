import { Component } from '@angular/core';
import { ModalDismissReasons, NgKitModal } from 'ng-kit';

@Component({
  selector: 'app-modal-basic',
  templateUrl: './modal-basic.html',
  styleUrls: ['./modal-basic.scss']
})
export class ModalBasicComponent {
  closeResult: string;

  constructor(private modalService: NgKitModal) { }

  open(content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title'
    }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): void {
    if (reason === ModalDismissReasons.ESC) {
      console.log('by pressing ESC');
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      console.log('by clicking on a backdrop');
    } else {
      console.log(`with: ${reason}`);
    }
  }
}
