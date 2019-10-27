import { NgModule } from '@angular/core';

import { ComponentWrapperComponent } from '../../demo-utility/component-wrapper/component-wrapper.component';
import { DemosSharedModule } from '../../demo-utility/demos-shared.module';
import { ApiPageComponent } from '../shared/api-page/api-page.component';
import { ComponentsSharedModule, DemoList } from '../shared/components.module';
import { ExamplesPageComponent } from '../shared/examples-page/examples.component';
import { CardBadgeComponent } from './demos/badge/card-badge.component';
import { CardBadgeModule } from './demos/badge/card-badge.module';
import { CardBodyComponent } from './demos/body/card-body.component';
import { CardBodyModule } from './demos/body/card-body.module';
import { CardControlsComponent } from './demos/controls/card-controls.component';
import { CardControlsModule } from './demos/controls/card-controls.module';
import { CardDefaultComponent } from './demos/default/card-default.component';
import { CardDefaultModule } from './demos/default/card-default.module';
import { CardTitleAreaComponent } from './demos/title-area/card-title-area.component';
import { CardTitleAreaModule } from './demos/title-area/card-title-area.module';

const DEMOS = {
  default: {
    title: 'Card Default',
    type: CardDefaultComponent,
    code: require('!!raw-loader!./demos/default/card-default.component.ts').default,
    markup: require('!!raw-loader!./demos/default/card-default.component.html').default,
    stylesheet: require('!!raw-loader!./demos/default/card-default.component.scss').default
  },
  cardTitleArea: {
    title: 'Card Title Area',
    type: CardTitleAreaComponent,
    code: require('!!raw-loader!./demos/title-area/card-title-area.component.ts').default,
    markup: require('!!raw-loader!./demos/title-area/card-title-area.component.html').default,
    stylesheet: require('!!raw-loader!./demos/title-area/card-title-area.component.scss').default
  },
  cardBadge: {
    title: 'Card Badge',
    type: CardBadgeComponent,
    code: require('!!raw-loader!./demos/badge/card-badge.component.ts').default,
    markup: require('!!raw-loader!./demos/badge/card-badge.component.html').default,
    stylesheet: require('!!raw-loader!./demos/badge/card-badge.component.scss').default
  },
  cardControls: {
    title: 'Card Controls',
    type: CardControlsComponent,
    code: require('!!raw-loader!./demos/controls/card-controls.component.ts').default,
    markup: require('!!raw-loader!./demos/controls/card-controls.component.html').default,
    stylesheet: require('!!raw-loader!./demos/controls/card-controls.component.scss').default
  },
  cardBody: {
    title: 'Card Body',
    type: CardBodyComponent,
    code: require('!!raw-loader!./demos/body/card-body.component.ts').default,
    markup: require('!!raw-loader!./demos/body/card-body.component.html').default,
    stylesheet: require('!!raw-loader!./demos/body/card-body.component.scss').default
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
  },
];

@NgModule({
  imports: [
    ComponentsSharedModule,
    DemosSharedModule,
    CardDefaultModule,
    CardTitleAreaModule,
    CardBodyModule,
    CardBadgeModule,
    CardControlsModule,
  ],
})
export class CardDemoModule {
  constructor(demoList: DemoList) {
    demoList.register('card', DEMOS);
  }
}
