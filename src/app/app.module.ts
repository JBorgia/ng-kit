import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { NgKitButtonModule, NgKitModalModule, NgKitSidebarModule, NgKitTabsetModule } from 'ng-kit';
import { BreakpointService } from '@services/breakpoint.service';
import { ThemeService } from '@services/theme.service';
import { NotificationToastDefaults } from '@shared/notification/toastDefaults';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionDemoModule } from './components/accordion/accordion.module';
import { ButtonDemoModule } from './components/button/button.module';
import { CardDemoModule } from './components/card/card.module';
import { CarouselDemoModule } from './components/carousel/carousel.module';
import { DatepickerDemoModule } from './components/datepicker/datepicker.module';
import { DropdownDemoModule } from './components/dropdown/dropdown.module';
import { ModalDemoModule } from './components/modal/modal.module';
import { PaginationDemoModule } from './components/pagination/pagination.module';
import { PopoverDemoModule } from './components/popover/popover.module';
import { ProgressbarDemoModule } from './components/progressbar/progressbar.module';
import { TableDemoModule } from './components/table/table.module';
import { TabsetDemoModule } from './components/tabset/tabset.module';
import { ThemeDemoModule } from './components/theme/theme.module';
import { TooltipDemoModule } from './components/tooltip/tooltip.module';
import { TypeaheadDemoModule } from './components/typeahead/typeahead.module';
import { CustomReuseStrategy } from './custom-reuse-strategfy';
import { DemosSharedModule } from './demo-utility/demos-shared.module';
import { FullModule } from './full/full.module';

const DEMOS = [
  AccordionDemoModule,
  ButtonDemoModule,
  CardDemoModule,
  CarouselDemoModule,
  DatepickerDemoModule,
  ModalDemoModule,
  PaginationDemoModule,
  PopoverDemoModule,
  ProgressbarDemoModule,
  TableDemoModule,
  TabsetDemoModule,
  ThemeDemoModule,
  TooltipDemoModule,
  TypeaheadDemoModule,
  DropdownDemoModule,
];
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    NgKitSidebarModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(Approutes, {
      useHash: false,
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
    NgKitTabsetModule,
    NgKitButtonModule,
    NgKitModalModule,
    FullModule,
    DemosSharedModule,
    ...DEMOS
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    BreakpointService,
    ThemeService,
    {
      provide: 'NotificationToastConfig', useValue: NotificationToastDefaults,
    },
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }, {
      provide: RouteReuseStrategy,
      useClass: CustomReuseStrategy
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

