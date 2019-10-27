import { NgModule } from '@angular/core';

import { ComponentWrapperComponent } from '../../demo-utility/component-wrapper/component-wrapper.component';
import { DemosSharedModule } from '../../demo-utility/demos-shared.module';
import { ApiPageComponent } from '../shared/api-page/api-page.component';
import { ComponentsSharedModule, DemoList } from '../shared/components.module';
import { ExamplesPageComponent } from '../shared/examples-page/examples.component';
import { TypeaheadBasicComponent } from './demos/basic/typeahead-basic';
import { TypeaheadBasicModule } from './demos/basic/typeahead-basic.module';
import { TypeaheadConfigComponent } from './demos/config/typeahead-config';
import { TypeaheadConfigModule } from './demos/config/typeahead-config.module';
import { TypeaheadFocusComponent } from './demos/focus/typeahead-focus';
import { TypeaheadFocusModule } from './demos/focus/typeahead-focus.module';
import { TypeaheadFormatComponent } from './demos/format/typeahead-format';
import { TypeaheadFormatModule } from './demos/format/typeahead-format.module';
import { TypeaheadHttpComponent } from './demos/http/typeahead-http';
import { TypeaheadHttpModule } from './demos/http/typeahead-http.module';
import { TypeaheadTemplateComponent } from './demos/template/typeahead-template';
import { TypeaheadTemplateModule } from './demos/template/typeahead-template.module';

const DEMOS = {
  basic: {
    title: 'Simple Typeahead',
    type: TypeaheadBasicComponent,
    code: require('!!raw-loader!./demos/basic/typeahead-basic').default,
    markup: require('!!raw-loader!./demos/basic/typeahead-basic.html').default
  },
  focus: {
    title: 'Open on focus',
    type: TypeaheadFocusComponent,
    code: require('!!raw-loader!./demos/focus/typeahead-focus').default,
    markup: require('!!raw-loader!./demos/focus/typeahead-focus.html').default
  },
  format: {
    title: 'Formatted results',
    type: TypeaheadFormatComponent,
    code: require('!!raw-loader!./demos/format/typeahead-format').default,
    markup: require('!!raw-loader!./demos/format/typeahead-format.html').default
  },
  http: {
    title: 'Wikipedia search',
    type: TypeaheadHttpComponent,
    code: require('!!raw-loader!./demos/http/typeahead-http').default,
    markup: require('!!raw-loader!./demos/http/typeahead-http.html').default
  },
  template: {
    title: 'Template for results',
    type: TypeaheadTemplateComponent,
    code: require('!!raw-loader!./demos/template/typeahead-template').default,
    markup: require('!!raw-loader!./demos/template/typeahead-template.html').default
  },
  config: {
    title: 'Global configuration of typeaheads',
    type: TypeaheadConfigComponent,
    code: require('!!raw-loader!./demos/config/typeahead-config').default,
    markup: require('!!raw-loader!./demos/config/typeahead-config.html').default
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    children: [
      { path: 'examples', component: ExamplesPageComponent },
      { path: 'api', component: ApiPageComponent }
    ]
  }
];

@NgModule({
  imports: [
    DemosSharedModule,
    ComponentsSharedModule,
    TypeaheadFormatModule,
    TypeaheadHttpModule,
    TypeaheadBasicModule,
    TypeaheadFocusModule,
    TypeaheadTemplateModule,
    TypeaheadConfigModule
  ]
})
export class TypeaheadDemoModule {
  constructor(demoList: DemoList) {
    demoList.register('typeahead', DEMOS);
  }
}
