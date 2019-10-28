import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NgkMenuItem } from './sidebar';



@Component({
  selector: 'li[ngk-sidebar-sub]',
  templateUrl: './sidebar-sub-li.component.html',
  styleUrls: ['./sidebar-sub-li.component.scss'],
})
export class NgkSubLiComponent implements OnInit {
  @Input() menuItem: NgkMenuItem;
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
