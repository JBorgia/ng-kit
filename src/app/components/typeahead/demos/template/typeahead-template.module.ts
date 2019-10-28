import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitTypeaheadModule } from 'ng-kit';

import { TypeaheadTemplateComponent } from './typeahead-template';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgKitTypeaheadModule
  ],
  declarations: [TypeaheadTemplateComponent],
  exports: [TypeaheadTemplateComponent],
  bootstrap: [TypeaheadTemplateComponent]
})
export class TypeaheadTemplateModule { }
