import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { XmMenuItem } from './sidebar';

@Component({
  selector: 'li[ng-kit-sidebar]',
  templateUrl: './sidebar-li.component.html',
  styleUrls: ['./sidebar-li.component.scss'],
})
export class XmLiComponent implements OnInit {
  @Input() menuItem: XmMenuItem;
  @Input() selectedItem: string;
  @Input() itemIndex;
  @Output() itemSelected = new EventEmitter<any>();
  @Output() subItemSelected = new EventEmitter<any>();
  @Input() showMinisidebar: boolean;
  color: string;
  showSubMenu;

  constructor() { }

  ngOnInit() {
    this.setColor(this.menuItem.color);
  }

  emitItemClicked(menuItem: XmMenuItem) {
    this.itemSelected.emit(menuItem);
  }

  emitSubItemClicked(index, subMenuItem: XmMenuItem) {
    this.subItemSelected.emit({
      index,
      ...subMenuItem
    });
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