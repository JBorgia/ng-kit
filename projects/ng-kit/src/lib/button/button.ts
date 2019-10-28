import { AfterViewInit, Component, HostBinding, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

/**
 * A default button to used throughout the application
 * 
 * Allows for tracking analytics on clicks
 */
@Component({
  selector: 'button[ngk]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class NgkButtonComponent implements OnInit, AfterViewInit {
  @ViewChild('contentWrapper', { static: true }) contentWrapper;

  @HostBinding('attr.role') role: string;
  @HostBinding('class.ngk-icon') ngkIcon: boolean;

  /**
   * The type of icon to display inside the button.
   */
  @Input() icon?: string;

  constructor(private renderer: Renderer2) {
    this.role = 'button';
  }

  ngOnInit() {
    this.icon ? this.ngkIcon = true : this.ngkIcon = false;
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
