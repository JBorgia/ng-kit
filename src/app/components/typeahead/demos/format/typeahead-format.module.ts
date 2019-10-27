import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { XmTypeaheadModule } from 'ng-kit';

import { TypeaheadFormatComponent } from './typeahead-format';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    XmTypeaheadModule
  ],
  declarations: [TypeaheadFormatComponent],
  exports: [TypeaheadFormatComponent],
  bootstrap: [TypeaheadFormatComponent]
})
export class TypeaheadFormatModule { }
