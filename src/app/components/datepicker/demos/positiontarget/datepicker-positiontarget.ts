import { Component } from '@angular/core';
import { NgkDateStruct } from 'ng-kit';

@Component({
  selector: 'app-datepicker-positiontarget',
  templateUrl: './datepicker-positiontarget.html',
  styleUrls: ['./datepicker-positiontarget.scss']
})
export class DatepickerPositiontargetComponent {
  model: NgkDateStruct;
  placement = 'bottom';
}
