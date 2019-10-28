import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ng-kit-modal-backdrop',
  template: '',
  styleUrls: ['./modal-backdrop.component.scss']
})
export class NgKitModalBackdropComponent {

  @HostBinding('style.z-index') zIndex = '1050';

  @HostBinding('class') get classes() {
    return `${this.backdropClass ? this.backdropClass : ''} ${this.lightboxMode ? 'lightbox-backdrop' : ''} modal-backdrop fade show`;
  }

  @Input() backdropClass: string;
  @Input() lightboxMode: boolean;
}
