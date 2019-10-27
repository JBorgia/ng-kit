import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CodeHighlightService } from './code/code-highlight.service';
import { CodeComponent } from './code/code.component';
import { ComponentWrapperComponent } from './component-wrapper/component-wrapper.component';
import { FragmentDirective } from './fragment/fragment.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    ComponentWrapperComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CodeComponent,
    FragmentDirective,
  ],
  declarations: [
    ComponentWrapperComponent,
    CodeComponent,
    FragmentDirective,
  ],
  providers: [
    CodeHighlightService
  ]
})
export class DemosSharedModule {
}
