import { NgModule } from '@angular/core';
import { NgkDatepickerModule } from 'ng-kit';

import { ComponentWrapperComponent } from '../../demo-utility/component-wrapper/component-wrapper.component';
import { DemosSharedModule } from '../../demo-utility/demos-shared.module';
import { ApiPageComponent } from '../shared/api-page/api-page.component';
import { ComponentsSharedModule, DemoList } from '../shared/components.module';
import { ExamplesPageComponent } from '../shared/examples-page/examples.component';
import { DatepickerAdapterComponent } from './demos/adapter/datepicker-adapter';
import { DatepickerAdapterModule } from './demos/adapter/datepicker-adpater.module';
import { DatepickerBasicComponent } from './demos/basic/datepicker-basic';
import { DatepickerBasicModule } from './demos/basic/datepicker-basic.module';
import { DatepickerConfigComponent } from './demos/config/datepicker-config';
import { DatepickerConfigModule } from './demos/config/datepicker-config.module';
import { DatepickerCustomdayComponent } from './demos/customday/datepicker-customday';
import { DatepickerCustomdayModule } from './demos/customday/datepicker-customday.module';
import { DatepickerDisabledComponent } from './demos/disabled/datepicker-disabled';
import { DatepickerDisabledModule } from './demos/disabled/datepicker-disabled.module';
import { DatepickerFooterTemplateModule } from './demos/footertemplate/datepicker-footer-template.module';
import { DatepickerFootertemplateComponent } from './demos/footertemplate/datepicker-footertemplate';
import { DatepickerI18nComponent } from './demos/i18n/datepicker-i18n';
import { DatepickerI18nModule } from './demos/i18n/datepicker-i18n.module';
import { DatepickerMultipleComponent } from './demos/multiple/datepicker-multiple';
import { DatepickerMultipleModule } from './demos/multiple/datepicker-multiple.module';
import { DatepickerPopupComponent } from './demos/popup/datepicker-popup';
import { DatepickerPopupModule } from './demos/popup/datepicker-popup.module';
import { DatepickerPositiontargetModule } from './demos/positiontarget/datepicker-position-target.module';
import { DatepickerPositiontargetComponent } from './demos/positiontarget/datepicker-positiontarget';
import { DatepickerRangeComponent } from './demos/range/datepicker-range';
import { DatepickerRangeModule } from './demos/range/datepicker-range.module';
import { DatepickerOverviewComponent } from './overview/datepicker-overview.component';
import { DatepickerOverviewDemoComponent } from './overview/demo/datepicker-overview-demo.component';

const OVERVIEW = {
  'basic-usage': 'Basic Usage',
  'getting-date': 'Getting/setting a date',
  'date-model': 'Date model and format',
  'navigation': 'Moving around',
  'limiting-dates': 'Disabling and limiting dates',
  'day-template': 'Day display customization',
  'today': 'Today\'s date',
  'footer-template': 'Custom footer',
  'range': 'Range selection',
  'i18n': 'Internationalization',
  'keyboard-shortcuts': 'Keyboard shortcuts'
};

const DEMOS = {
  basic: {
    title: 'Basic datepicker',
    type: DatepickerBasicComponent,
    code: require('!!raw-loader!./demos/basic/datepicker-basic').default,
    markup: require('!!raw-loader!./demos/basic/datepicker-basic.html').default
  },
  popup: {
    title: 'Datepicker in a popup',
    type: DatepickerPopupComponent,
    code: require('!!raw-loader!./demos/popup/datepicker-popup').default,
    markup: require('!!raw-loader!./demos/popup/datepicker-popup.html').default,
    stylesheet: require('!!raw-loader!./demos/popup/datepicker-popup.scss').default,
  },
  multiple: {
    title: 'Multiple months',
    type: DatepickerMultipleComponent,
    code: require('!!raw-loader!./demos/multiple/datepicker-multiple').default,
    markup: require('!!raw-loader!./demos/multiple/datepicker-multiple.html').default,
    stylesheet: require('!!raw-loader!./demos/multiple/datepicker-multiple.scss').default,
  },
  range: {
    title: 'Range selection',
    type: DatepickerRangeComponent,
    code: require('!!raw-loader!./demos/range/datepicker-range').default,
    markup: require('!!raw-loader!./demos/range/datepicker-range.html').default,
    stylesheet: require('!!raw-loader!./demos/range/datepicker-range.scss').default,
  },
  disabled: {
    title: 'Disabled datepicker',
    type: DatepickerDisabledComponent,
    code: require('!!raw-loader!./demos/disabled/datepicker-disabled').default,
    markup: require('!!raw-loader!./demos/disabled/datepicker-disabled.html').default
  },
  adapter: {
    title: 'Custom date adapter',
    type: DatepickerAdapterComponent,
    code: require('!!raw-loader!./demos/adapter/datepicker-adapter').default,
    markup: require('!!raw-loader!./demos/adapter/datepicker-adapter.html').default
  },
  i18n: {
    title: 'Internationalization of datepickers',
    type: DatepickerI18nComponent,
    code: require('!!raw-loader!./demos/i18n/datepicker-i18n').default,
    markup: require('!!raw-loader!./demos/i18n/datepicker-i18n.html').default
  },
  customday: {
    title: 'Custom day view',
    type: DatepickerCustomdayComponent,
    code: require('!!raw-loader!./demos/customday/datepicker-customday').default,
    markup: require('!!raw-loader!./demos/customday/datepicker-customday.html').default,
    stylesheet: require('!!raw-loader!./demos/customday/datepicker-customday.scss').default
  },
  footertemplate: {
    title: 'Footer template',
    type: DatepickerFootertemplateComponent,
    code: require('!!raw-loader!./demos/footertemplate/datepicker-footertemplate').default,
    markup: require('!!raw-loader!./demos/footertemplate/datepicker-footertemplate.html').default,
    stylesheet: require('!!raw-loader!./demos/footertemplate/datepicker-footertemplate.scss').default
  },
  positiontarget: {
    title: 'Position target',
    type: DatepickerPositiontargetComponent,
    code: require('!!raw-loader!./demos/positiontarget/datepicker-positiontarget').default,
    markup: require('!!raw-loader!./demos/positiontarget/datepicker-positiontarget.html').default,
    stylesheet: require('!!raw-loader!./demos/positiontarget/datepicker-positiontarget.scss').default
  },
  config: {
    title: 'Global configuration of datepickers',
    type: DatepickerConfigComponent,
    code: require('!!raw-loader!./demos/config/datepicker-config').default,
    markup: require('!!raw-loader!./demos/config/datepicker-config.html').default
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'overview' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: { OVERVIEW },
    children: [
      { path: 'overview', component: DatepickerOverviewComponent },
      { path: 'examples', component: ExamplesPageComponent },
      { path: 'api', component: ApiPageComponent }
    ]
  }
];

@NgModule({
  imports: [
    NgkDatepickerModule,
    DemosSharedModule,
    ComponentsSharedModule,
    DatepickerBasicModule,
    DatepickerPopupModule,
    DatepickerDisabledModule,
    DatepickerI18nModule,
    DatepickerCustomdayModule,
    DatepickerFooterTemplateModule,
    DatepickerConfigModule,
    DatepickerPositiontargetModule,
    DatepickerMultipleModule,
    DatepickerRangeModule,
    DatepickerAdapterModule,
  ],
  declarations: [
    DatepickerOverviewComponent,
    DatepickerOverviewDemoComponent
  ]
})
export class DatepickerDemoModule {
  constructor(demoList: DemoList) {
    demoList.register('datepicker', DEMOS, OVERVIEW);
  }
}
