import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgkDirectivesModule, NgkDropdownModule, NgkSidebarModule } from 'ng-kit';

import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { HeaderComponent } from './header.component';
import { LeftToggleComponent } from './left-toggle/left-toggle.component';
import { LogoComponent } from './logo/logo.component';
import { ProfileComponent } from './profile/proflie.component';

@NgModule({
    declarations: [
        LogoComponent,
        HeaderComponent,
        LeftToggleComponent,
        ProfileComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        RouterModule,
        BreadcrumbModule,
        NgkDirectivesModule,
        NgkDropdownModule,
        NgkSidebarModule,
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule { }
