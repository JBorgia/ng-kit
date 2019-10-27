import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'a[fragment]'
})
export class FragmentDirective {
  mainContainer: HTMLElement = document.getElementById('main-container');

  @HostBinding('class.title-fragment') titleFragment: boolean = true;
  @HostBinding('attr.id') @Input() fragment: string;

  @HostListener('click') onClick(event: Event) {

    const yourElement = document.getElementById(this.fragment);
    const yCoordinate = yourElement.offsetTop;
    const yOffset = -16;

    this.mainContainer.scrollTo({
      top: yCoordinate + yOffset,
      behavior: 'smooth'
    });
  }
}
