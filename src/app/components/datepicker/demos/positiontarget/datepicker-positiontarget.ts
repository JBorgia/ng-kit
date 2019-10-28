import { Component } from '@angular/core';
import { NgKitDateStruct } from 'ng-kit';

@Component({
  selector: 'app-datepicker-positiontarget',
  templateUrl: './datepicker-positiontarget.html',
  styleUrls: ['./datepicker-positiontarget.scss']
})
export class DatepickerPositiontargetComponent {
  model: NgKitDateStruct;
  placement = 'bottom';
}
