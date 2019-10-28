import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NotificationModule } from '@shared/notification/notification.module';
import { NgkDropdownModule } from 'ng-kit';

import { NgkDirectivesModule } from '../directives/directives.module';
import { FullComponent } from './full.component';
import { NavigationComponent } from './header-navigation/navigation.component';
import { LogoComponent } from './logo/logo.component';
import { NavSidebarModule } from './nav-sidebar/nav-sidebar.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    NavSidebarModule,
    RouterModule,
    NgkDirectivesModule,
    NgkDropdownModule,
    NotificationModule,
  ],
  declarations: [
    FullComponent,
    LogoComponent,
    NavigationComponent,
  ],
})
export class FullModule { }
