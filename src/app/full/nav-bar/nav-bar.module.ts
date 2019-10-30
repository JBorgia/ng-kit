import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgkDirectivesModule, NgkSidebarModule } from 'ng-kit';

import { NavBarComponent } from './nav-bar.component';
import { NavSidebarService } from './nav-bar.service';

@NgModule({
    imports: [
        CommonModule,
        NgkSidebarModule,
        NgkDirectivesModule,
    ],
    declarations: [
        NavBarComponent,
    ],
    exports: [
        NavBarComponent
    ],
    providers: [
        NavSidebarService
    ]
})
export class NavBarModule { }
