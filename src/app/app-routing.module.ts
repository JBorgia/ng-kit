import { Routes } from '@angular/router';

import { ROUTES as ACCORDION_ROUTES } from './components/accordion/accordion.module';
import { ROUTES as BUTTON_ROUTES } from './components/button/button.module';
import { ROUTES as CARD_ROUTES } from './components/card/card.module';
import { ROUTES as CAROUSEL_ROUTES } from './components/carousel/carousel.module';
import { ROUTES as DATEPICKER_ROUTES } from './components/datepicker/datepicker.module';
import { ROUTES as DROPDOWN_ROUTES } from './components/dropdown/dropdown.module';
import { ROUTES as MODAL_ROUTES } from './components/modal/modal.module';
import { ROUTES as PAGINATION_ROUTES } from './components/pagination/pagination.module';
import { ROUTES as POPOVER_ROUTES } from './components/popover/popover.module';
import { ROUTES as PROGRESSBAR_ROUTES } from './components/progressbar/progressbar.module';
import { ROUTES as TABLE_ROUTES } from './components/table/table.module';
import { ROUTES as TABSET_ROUTES } from './components/tabset/tabset.module';
import { ROUTES as THEME_ROUTES } from './components/theme/theme.module';
import { ROUTES as TOOLTIP_ROUTES } from './components/tooltip/tooltip.module';
import { ROUTES as TYPEAHEAD_ROUTES } from './components/typeahead/typeahead.module';
import { FullComponent } from './full/full.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'components/theme' },
      { path: 'components', pathMatch: 'full', redirectTo: 'components/theme' },
      { path: 'components/accordion', children: ACCORDION_ROUTES },
      { path: 'components/button', children: BUTTON_ROUTES },
      { path: 'components/card', children: CARD_ROUTES },
      { path: 'components/carousel', children: CAROUSEL_ROUTES },
      { path: 'components/datepicker', children: DATEPICKER_ROUTES },
      { path: 'components/dropdown', children: DROPDOWN_ROUTES },
      { path: 'components/modal', children: MODAL_ROUTES },
      { path: 'components/pagination', children: PAGINATION_ROUTES },
      { path: 'components/popover', children: POPOVER_ROUTES },
      { path: 'components/progressbar', children: PROGRESSBAR_ROUTES },
      { path: 'components/table', children: TABLE_ROUTES },
      { path: 'components/tabset', children: TABSET_ROUTES },
      { path: 'components/theme', children: THEME_ROUTES },
      { path: 'components/tooltip', children: TOOLTIP_ROUTES },
      { path: 'components/typeahead', children: TYPEAHEAD_ROUTES }
    ]
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];
