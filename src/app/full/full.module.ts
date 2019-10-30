import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgkDirectivesModule, NgkDropdownModule, NgkSidebarModule } from 'ng-kit';

import { FullComponent } from './full.component';
import { BreadcrumbModule } from './header/breadcrumb/breadcrumb.module';
import { HeaderModule } from './header/header.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavSidebarService } from './nav-bar/nav-bar.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
    NgkDirectivesModule,
    NgkDropdownModule,
    NgkSidebarModule,
    HeaderModule,
    BreadcrumbModule,
  ],
  declarations: [
    FullComponent,
    NavBarComponent,
  ],
  providers: [
    NavSidebarService
  ]
})
export class FullModule { }
