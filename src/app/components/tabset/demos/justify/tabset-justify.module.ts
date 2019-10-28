import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgkTabsetModule } from 'ng-kit';

import { TabsetJustifyComponent } from './tabset-justify';

@NgModule({
  imports: [BrowserModule, FormsModule, NgkTabsetModule],
  declarations: [TabsetJustifyComponent],
  exports: [TabsetJustifyComponent],
  bootstrap: [TabsetJustifyComponent]
})
export class TabsetJustifyModule { }
