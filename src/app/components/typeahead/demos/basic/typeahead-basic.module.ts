import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { XmTypeaheadModule } from 'ng-kit';

import { TypeaheadBasicComponent } from './typeahead-basic';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    XmTypeaheadModule
  ],
  declarations: [TypeaheadBasicComponent],
  exports: [TypeaheadBasicComponent],
  bootstrap: [TypeaheadBasicComponent]
})
export class TypeaheadBasicModule { }
