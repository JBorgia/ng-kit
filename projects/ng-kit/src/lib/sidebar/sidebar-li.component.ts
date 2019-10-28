import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NgkMenuItem } from './sidebar';

@Component({
  selector: 'li[ngk-sidebar]',
  templateUrl: './sidebar-li.component.html',
  styleUrls: ['./sidebar-li.component.scss'],
})
export class NgkLiComponent implements OnInit {
  @Input() menuItem: NgkMenuItem;
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

  emitItemClicked(menuItem: NgkMenuItem) {
    this.itemSelected.emit(menuItem);
  }

  emitSubItemClicked(index, subMenuItem: NgkMenuItem) {
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
