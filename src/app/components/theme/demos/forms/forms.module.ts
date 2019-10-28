import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule } from 'ng-kit';

import { FormsComponent } from './forms.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgKitButtonModule,
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
