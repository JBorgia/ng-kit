import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitTypeaheadModule } from 'ng-kit';

import { TypeaheadHttpComponent } from './typeahead-http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgKitTypeaheadModule
  ],
  declarations: [TypeaheadHttpComponent],
  exports: [TypeaheadHttpComponent],
  bootstrap: [TypeaheadHttpComponent]
})
export class TypeaheadHttpModule { }
