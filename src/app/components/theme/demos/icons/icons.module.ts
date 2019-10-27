import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IconExampleComponent } from './icon-example/icon-example.component';
import { IconLibraryComponent } from './icon-library.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    IconLibraryComponent,
    IconExampleComponent,
  ],
  exports: [
    IconLibraryComponent,
    IconExampleComponent,
  ],
  bootstrap: [
    IconLibraryComponent,
    IconExampleComponent,
  ]
})
export class IconsDemoModule { }
