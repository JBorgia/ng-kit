import { NgModule } from '@angular/core';

import { ComponentWrapperComponent } from '../../demo-utility/component-wrapper/component-wrapper.component';
import { DemosSharedModule } from '../../demo-utility/demos-shared.module';
import { ApiPageComponent } from '../shared/api-page/api-page.component';
import { ComponentsSharedModule, DemoList } from '../shared/components.module';
import { ExamplesPageComponent } from '../shared/examples-page/examples.component';
import { CarouselBasicComponent } from './demos/basic/carousel-basic';
import { CarouselBasicModule } from './demos/basic/carousel-basic.module';
import { CarouselConfigComponent } from './demos/config/carousel-config';
import { CarouselConfigModule } from './demos/config/carousel-config.module';
import { CarouselNavigationComponent } from './demos/navigation/carousel-navigation';
import { CarouselNavigationModule } from './demos/navigation/carousel-navigation.module';
import { CarouselPauseComponent } from './demos/pause/carousel-pause';
import { CarouselPauseModule } from './demos/pause/carousel-pause.module';

const DEMOS = {
  basic: {
    title: 'Basic',
    type: CarouselBasicComponent,
    code: require('!!raw-loader!./demos/basic/carousel-basic').default,
    markup: require('!!raw-loader!./demos/basic/carousel-basic.html').default,
    stylesheet: require('!!raw-loader!./demos/basic/carousel-basic.scss').default
  },
  navigation: {
    title: 'Navigation arrows and indicators',
    type: CarouselNavigationComponent,
    code: require('!!raw-loader!./demos/navigation/carousel-navigation').default,
    markup: require('!!raw-loader!./demos/navigation/carousel-navigation.html').default,
    stylesheet: require('!!raw-loader!./demos/navigation/carousel-navigation.scss').default
  },
  pause: {
    title: 'Pause/cycle',
    type: CarouselPauseComponent,
    code: require('!!raw-loader!./demos/pause/carousel-pause').default,
    markup: require('!!raw-loader!./demos/pause/carousel-pause.html').default,
    stylesheet: require('!!raw-loader!./demos/pause/carousel-pause.scss').default
  },
  config: {
    title: 'Global configuration of carousels',
    type: CarouselConfigComponent,
    code: require('!!raw-loader!./demos/config/carousel-config').default,
    markup: require('!!raw-loader!./demos/config/carousel-config.html').default,
    stylesheet: require('!!raw-loader!./demos/config/carousel-config.scss').default
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
    CarouselBasicModule,
    CarouselConfigModule,
    CarouselNavigationModule,
    CarouselPauseModule
  ]
})
export class CarouselDemoModule {
  constructor(demoList: DemoList) {
    demoList.register('carousel', DEMOS);
  }
}
