import { Component } from '@angular/core';
import { NgkTabChangeEvent } from 'ng-kit';

@Component({
  selector: 'app-tabset-preventchange',
  templateUrl: './tabset-prevent-change.html',
  styleUrls: ['./tabset-prevent-change.scss']
})
export class TabsetPreventchangeComponent {
  public beforeChange($event: NgkTabChangeEvent) {
    if ($event.nextId === 'tab-preventchange2') {
      $event.preventDefault();
    }
  }
}
