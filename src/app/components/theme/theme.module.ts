import { NgModule } from '@angular/core';

import { ComponentWrapperComponent } from '../../demo-utility/component-wrapper/component-wrapper.component';
import { ComponentsSharedModule, DemoList } from '../shared/components.module';
import { ExamplesPageComponent } from '../shared/examples-page/examples.component';
import { FormsComponent } from './demos/forms/forms.component';
import { FormsDemoModule } from './demos/forms/forms.module';
import { IconLibraryComponent } from './demos/icons/icon-library.component';
import { IconsDemoModule } from './demos/icons/icons.module';
import { SwatchesComponent } from './demos/swatches/swatches.component';
import { SwatchesDemoModule } from './demos/swatches/swatches.module';
import { TypographyComponent } from './demos/typography/typography.component';
import { TypographyDemoModule } from './demos/typography/typography.module';

const DEMOS = {
  swatches: {
    title: 'Color Swatches',
    type: SwatchesComponent,
    code: require('!!raw-loader!./demos/swatches/swatches.component').default,
    markup: require('!!raw-loader!./demos/swatches/swatches.component.html').default,
    stylesheet: require('!!raw-loader!./demos/swatches/swatches.component.scss').default,
  },
  typography: {
    title: 'Typography',
    type: TypographyComponent,
    code: require('!!raw-loader!./demos/typography/typography.component').default,
    markup: require('!!raw-loader!./demos/typography/typography.component.html').default,
  },
  forms: {
    title: 'Forms',
    type: FormsComponent,
    code: require('!!raw-loader!./demos/forms/forms.component').default,
    markup: require('!!raw-loader!./demos/forms/forms.component.html').default,
    stylesheet: require('!!raw-loader!./demos/forms/forms.component.scss').default,
  },
  icons: {
    title: 'Icons',
    type: IconLibraryComponent,
    code: require('!!raw-loader!./demos/icons/icon-library.component').default,
    markup: require('!!raw-loader!./demos/icons/icon-library.component.html').default,
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    children: [
      { path: 'examples', component: ExamplesPageComponent },
    ]
  }
];

@NgModule({
  imports: [
    ComponentsSharedModule,
    SwatchesDemoModule,
    TypographyDemoModule,
    FormsDemoModule,
    IconsDemoModule,
  ]
})
export class ThemeDemoModule {
  constructor(demoList: DemoList) {
    demoList.register('theme', DEMOS);
  }
}
