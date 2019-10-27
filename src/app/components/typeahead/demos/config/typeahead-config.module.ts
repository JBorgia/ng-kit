import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { XmTypeaheadModule } from 'ng-kit';

import { TypeaheadConfigComponent } from './typeahead-config';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    XmTypeaheadModule
  ],
  declarations: [TypeaheadConfigComponent],
  exports: [TypeaheadConfigComponent],
  bootstrap: [TypeaheadConfigComponent]
})
export class TypeaheadConfigModule { }
