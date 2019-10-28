import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule } from 'ng-kit';

import { FormsComponent } from './forms.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgkButtonModule,
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
