import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule } from 'ng-kit';

import { FormsComponent } from './forms.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    XmButtonModule,
  ],
  declarations: [
    FormsComponent
  ],
  exports: [
    FormsComponent
  ],
  bootstrap: [
    FormsComponent
  ]
})
export class FormsDemoModule { }
