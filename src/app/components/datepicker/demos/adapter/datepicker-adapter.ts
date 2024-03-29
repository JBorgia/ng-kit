import { Component } from '@angular/core';
import { NgkDateAdapter, NgkDateNativeAdapter } from 'ng-kit';

@Component({
  selector: 'app-datepicker-adapter',
  templateUrl: './datepicker-adapter.html',
  styleUrls: ['./datepicker-adapter.scss'],

  // NOTE: For this example we are only providing current component, but probably
  // NOTE: you will want to provide your main App Module
  providers: [{ provide: NgkDateAdapter, useClass: NgkDateNativeAdapter }]
})
export class DatepickerAdapterComponent {

  model1: Date;
  model2: Date;

  get today() {
    return new Date();
  }
}
