import { NgModule } from '@angular/core';

import { ComponentWrapperComponent } from '../../demo-utility/component-wrapper/component-wrapper.component';
import { DemosSharedModule } from '../../demo-utility/demos-shared.module';
import { ApiPageComponent } from '../shared/api-page/api-page.component';
import { ComponentsSharedModule, DemoList } from '../shared/components.module';
import { ExamplesPageComponent } from '../shared/examples-page/examples.component';
import { AccordionCloseOthersComponent } from './demos/close-others/accordion-close-others.component';
import { AccordionCloseOthersModule } from './demos/close-others/accordion-close-others.module';
import { AccordionDefaultComponent } from './demos/default/accordion-default.component';
import { AccordionDefaultModule } from './demos/default/accordion-default.module';
import { AccordionDisableTransitionComponent } from './demos/disable-transition/accordion-disable-transition.component';
import { AccordionDisableTransitionModule } from './demos/disable-transition/accordion-disable-transition.module';
import { AccordionTrackChangesComponent } from './demos/track-changes/accordion-track-changes.component';
import { AccordionTrackChangesModule } from './demos/track-changes/accordion-track-changes.module';

const DEMOS = {
  default: {
    title: 'Default',
    type: AccordionDefaultComponent,
    code: require('!!raw-loader!./demos/default/accordion-default.component.ts').default,
    markup: require('!!raw-loader!./demos/default/accordion-default.component.html').default,
    stylesheet: require('!!raw-loader!./demos/default/accordion-default.component.scss').default
  },
  closeOthers: {
    title: 'Close Others',
    type: AccordionCloseOthersComponent,
    code: require('!!raw-loader!./demos/close-others/accordion-close-others.component.ts').default,
    markup: require('!!raw-loader!./demos/close-others/accordion-close-others.component.html').default,
    stylesheet: require('!!raw-loader!./demos/close-others/accordion-close-others.component.scss').default
  },
  disableTransition: {
    title: 'Disable Transition',
    type: AccordionDisableTransitionComponent,
    code: require('!!raw-loader!./demos/disable-transition/accordion-disable-transition.component.ts').default,
    markup: require('!!raw-loader!./demos/disable-transition/accordion-disable-transition.component.html').default,
    stylesheet: require('!!raw-loader!./demos/disable-transition/accordion-disable-transition.component.scss').default
  },
  trackChanges: {
    title: 'Track Changes',
    type: AccordionTrackChangesComponent,
    code: require('!!raw-loader!./demos/disable-transition/accordion-disable-transition.component.ts').default,
    markup: require('!!raw-loader!./demos/disable-transition/accordion-disable-transition.component.html').default,
    stylesheet: require('!!raw-loader!./demos/disable-transition/accordion-disable-transition.component.scss').default
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
    AccordionDefaultModule,
    AccordionCloseOthersModule,
    AccordionDisableTransitionModule,
    AccordionTrackChangesModule
  ],
})
export class AccordionDemoModule {
  constructor(demoList: DemoList) {
    demoList.register('accordion', DEMOS);
  }
}
