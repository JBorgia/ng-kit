import { NgModule } from '@angular/core';

import { NgkModal } from './modal';
import { NgkModalBackdropComponent } from './modal-backdrop.component';
import { NgkModalWindowComponent } from './modal-window.component';

export { NgkModal } from './modal';
export { NgkModalConfig, NgkModalOptions } from './modal-config';
export { NgkModalRef, NgkActiveModal } from './modal-ref';
export { ModalDismissReasons } from './modal-dismiss-reasons';

@NgModule({
  declarations: [NgkModalBackdropComponent, NgkModalWindowComponent],
  entryComponents: [NgkModalBackdropComponent, NgkModalWindowComponent],
  providers: [NgkModal],
})
export class NgkModalModule { }
