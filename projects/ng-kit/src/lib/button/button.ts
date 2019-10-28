import { AfterViewInit, Component, HostBinding, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

/**
 * A default button to used throughout the application
 * 
 * Allows for tracking analytics on clicks
 */
@Component({
  selector: 'button[xm]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class NgKitButtonComponent implements OnInit, AfterViewInit {
  @ViewChild('contentWrapper', { static: true }) contentWrapper;

  @HostBinding('attr.role') role: string;
  @HostBinding('class.ng-kit-icon') xmIcon: boolean;

  /**
   * The type of icon to display inside the button.
   */
  @Input() icon?: string;

  constructor(private renderer: Renderer2) {
    this.role = 'button';
  }

  ngOnInit() {
    this.icon ? this.xmIcon = true : this.xmIcon = false;
  }

  ngAfterViewInit(): void {
    const textSpan = this.contentWrapper.nativeElement;
    if (!textSpan.hasChildNodes()) {
      this.renderer.addClass(textSpan, 'hide-text-node');
    } else {
      this.renderer.addClass(textSpan, 'show-text-node');
    }
  }

}
