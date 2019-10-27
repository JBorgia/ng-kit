import { NgModule } from '@angular/core';

import { ComponentWrapperComponent } from '../../demo-utility/component-wrapper/component-wrapper.component';
import { DemosSharedModule } from '../../demo-utility/demos-shared.module';
import { ApiPageComponent } from '../shared/api-page/api-page.component';
import { ComponentsSharedModule, DemoList } from '../shared/components.module';
import { ExamplesPageComponent } from '../shared/examples-page/examples.component';
import { ButtonsDefaultComponent } from './demos/default/buttons-default.component';
import { ButtonsDefaultModule } from './demos/default/buttons-default.module';
import { IconTextComponent } from './demos/icon-text/buttons-icon-text.component';
import { IconTextModule } from './demos/icon-text/buttons-icon-text.module';
import { ButtonsIconComponent } from './demos/icon/buttons-icon.component';
import { ButtonsIconModule } from './demos/icon/buttons-icon.module';

const DEMOS = {
  default: {
    title: 'Buttons Default',
    type: ButtonsDefaultComponent,
    code: require('!!raw-loader!./demos/default/buttons-default.component.ts').default,
    markup: require('!!raw-loader!./demos/default/buttons-default.component.html').default
  },
  icon: {
    title: 'Buttons Icon',
    type: ButtonsIconComponent,
    code: require('!!raw-loader!./demos/icon/buttons-icon.component.ts').default,
    markup: require('!!raw-loader!./demos/icon/buttons-icon.component.html').default
  },
  iconText: {
    title: 'Buttons Icon Text',
    type: IconTextComponent,
    code: require('!!raw-loader!./demos/icon-text/buttons-icon-text.component.ts').default,
    markup: require('!!raw-loader!./demos/icon-text/buttons-icon-text.component.html').default
  },
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
    ButtonsDefaultModule,
    ButtonsIconModule,
    IconTextModule,
  ],
})
export class ButtonDemoModule {
  constructor(demoList: DemoList) {
    demoList.register('button', DEMOS);
  }
}
