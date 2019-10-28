import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitTypeaheadModule } from 'ng-kit';

import { TypeaheadConfigComponent } from './typeahead-config';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgKitTypeaheadModule
  ],
  declarations: [TypeaheadConfigComponent],
  exports: [TypeaheadConfigComponent],
  bootstrap: [TypeaheadConfigComponent]
})
export class TypeaheadConfigModule { }
