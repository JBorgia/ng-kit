import { NgModule } from '@angular/core';

import { NgKitModal } from './modal';
import { NgKitModalBackdropComponent } from './modal-backdrop.component';
import { NgKitModalWindowComponent } from './modal-window.component';

export { NgKitModal } from './modal';
export { NgKitModalConfig, NgKitModalOptions } from './modal-config';
export { NgKitModalRef, NgKitActiveModal } from './modal-ref';
export { ModalDismissReasons } from './modal-dismiss-reasons';

@NgModule({
  declarations: [NgKitModalBackdropComponent, NgKitModalWindowComponent],
  entryComponents: [NgKitModalBackdropComponent, NgKitModalWindowComponent],
  providers: [NgKitModal],
})
export class NgKitModalModule { }
