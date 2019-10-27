import { NgModule } from '@angular/core';

import { ComponentWrapperComponent } from '../../demo-utility/component-wrapper/component-wrapper.component';
import { DemosSharedModule } from '../../demo-utility/demos-shared.module';
import { ApiPageComponent } from '../shared/api-page/api-page.component';
import { ComponentsSharedModule, DemoList } from '../shared/components.module';
import { ExamplesPageComponent } from '../shared/examples-page/examples.component';
import { TableDefaultComponent } from './demos/default/table-default.component';
import { TableDefaultModule } from './demos/default/table-default.module';
import { TableHorizontalComponent } from './demos/horizontal/table-horizontal.component';
import { TableHorizontalModule } from './demos/horizontal/table-horizontal.module';
import { TableBandedComponent } from './demos/table-banded/table-banded.component';
import { TableBandedModule } from './demos/table-banded/table-banded.module';
import { TableTableVisibilityComponent } from './demos/table-visibility/table-table-visibility.component';
import { TableTableVisibilityModule } from './demos/table-visibility/table-table-visibility.module';
import { TableTableWidthsComponent } from './demos/table-widths/table-table-widths.component';
import { TableTableWidthsModule } from './demos/table-widths/table-table-widths.module';
import { TableThWidthsComponent } from './demos/th-widths/table-th-widths.component';
import { TableThWidthsModule } from './demos/th-widths/table-th-widths.module';

const DEMOS = {
  default: {
    title: 'Table Default',
    type: TableDefaultComponent,
    code: require('!!raw-loader!./demos/default/table-default.component.ts').default,
    markup: require('!!raw-loader!./demos/default/table-default.component.html').default,
    stylesheet: require('!!raw-loader!./demos/default/table-default.component.scss').default
  },
  tableBanded: {
    title: 'Banded Tables',
    type: TableBandedComponent,
    code: require('!!raw-loader!./demos/table-banded/table-banded.component.ts').default,
    markup: require('!!raw-loader!./demos/table-banded/table-banded.component.html').default,
    stylesheet: require('!!raw-loader!./demos/table-banded/table-banded.component.scss').default
  },
  tableTableWidths: {
    title: 'Table [colWidths]',
    type: TableTableWidthsComponent,
    code: require('!!raw-loader!./demos/table-widths/table-table-widths.component.ts').default,
    markup: require('!!raw-loader!./demos/table-widths/table-table-widths.component.html').default,
    stylesheet: require('!!raw-loader!./demos/table-widths/table-table-widths.component.scss').default
  },
  tableTableVisibility: {
    title: 'Table [colVisibility]',
    type: TableTableVisibilityComponent,
    code: require('!!raw-loader!./demos/table-visibility/table-table-visibility.component.ts').default,
    markup: require('!!raw-loader!./demos/table-visibility/table-table-visibility.component.html').default,
    stylesheet: require('!!raw-loader!./demos/table-visibility/table-table-visibility.component.scss').default
  },
  tableThWidths: {
    title: 'Th [colWidth]',
    type: TableThWidthsComponent,
    code: require('!!raw-loader!./demos/th-widths/table-th-widths.component.ts').default,
    markup: require('!!raw-loader!./demos/th-widths/table-th-widths.component.html').default,
    stylesheet: require('!!raw-loader!./demos/th-widths/table-th-widths.component.scss').default
  },
  horizontal: {
    title: 'Table Horizontal',
    type: TableHorizontalComponent,
    code: require('!!raw-loader!./demos/horizontal/table-horizontal.component.ts').default,
    markup: require('!!raw-loader!./demos/horizontal/table-horizontal.component.html').default,
    stylesheet: require('!!raw-loader!./demos/horizontal/table-horizontal.component.scss').default
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
    ComponentsSharedModule,
    DemosSharedModule,
    TableBandedModule,
    TableDefaultModule,
    TableHorizontalModule,
    TableTableWidthsModule,
    TableThWidthsModule,
    TableTableVisibilityModule,
  ],
})
export class TableDemoModule {
  constructor(demoList: DemoList) {
    demoList.register('table', DEMOS);
  }
}
