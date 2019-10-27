import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import docs from '../../../../api-docs';
import { ClassDesc, MethodDesc, signature } from './api-docs.model';

/**
 * Displays the API docs of a class, which is not a directive.
 *
 * For Config services, use ApiDocsConfig instead.
 */
@Component({
  selector: 'app-api-docs-class',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './api-docs-class.component.html',
  styleUrls: ['./api-docs-class.component.scss'],
  styles: [`
    .label-cell {
      width: 25%;
    }
    .content-cell {
      width: 75%;
    }
    `
  ]
})
export class ApiDocsClassComponent {
  apiDocs: ClassDesc;

  constructor() { }

  @Input() set type(typeName: string) {
    this.apiDocs = docs[typeName];
  }

  methodSignature(method: MethodDesc): string { return signature(method); }
}
