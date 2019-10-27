import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgKitDropdownModule } from 'ng-kit';
import { NotificationModule } from '@shared/notification/notification.module';

import { NgKitDirectivesModule } from '../directives/directives.module';
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
    NgKitDirectivesModule,
    NgKitDropdownModule,
    NotificationModule,
  ],
  declarations: [
    FullComponent,
    LogoComponent,
    NavigationComponent,
  ],
})
export class FullModule { }
