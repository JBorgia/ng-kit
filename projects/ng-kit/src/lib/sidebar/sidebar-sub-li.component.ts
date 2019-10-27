import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { XmMenuItem } from './sidebar';



@Component({
  selector: 'li[ng-kit-sidebar-sub]',
  templateUrl: './sidebar-sub-li.component.html',
  styleUrls: ['./sidebar-sub-li.component.scss'],
})
export class XmSubLiComponent implements OnInit {
  @Input() menuItem: XmMenuItem;
  @Input() selectedItem: string;
  @Input() showMinisidebar: boolean;
  @Output() subItemSelected = new EventEmitter<any>();
  color: string;
  showSubMenu;

  constructor() { }

  ngOnInit() {
    this.setColor(this.menuItem.color);
  }

  emitSubItemClicked() {
    this.subItemSelected.emit();
  }

  private setColor(color) {
    if (!color) {
      return;
    }
    try {
      if (color.a) {
        this.color = `rgba(${color.r},${color.g},${color.b},${color.a})`;
      } else {
        this.color = `rgb(${color.r},${color.g},${color.b})`;
      }
    } catch (error) {
      console.error('Unable to set rgb/rgba color');
    }
  }
}
