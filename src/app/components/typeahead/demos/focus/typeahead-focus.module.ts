import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitTypeaheadModule } from 'ng-kit';

import { TypeaheadFocusComponent } from './typeahead-focus';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgKitTypeaheadModule
  ],
  declarations: [TypeaheadFocusComponent],
  exports: [TypeaheadFocusComponent],
  bootstrap: [TypeaheadFocusComponent]
})
export class TypeaheadFocusModule { }
