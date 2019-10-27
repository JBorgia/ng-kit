import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Snippet } from '../../../demo-utility/code/snippet';

@Component({
  selector: 'app-widget-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class WidgetDemoComponent {
  @Input() demoTitle: string;
  @Input() component: string;
  @Input() id: string;
  @Input() code: string;
  @Input() markup: string;
  @Input() stylesheet: string;
  @Input() showCode = false;

  get markupSnippet() {
    return Snippet({ lang: 'html', code: this.markup });
  }

  get codeSnippet() {
    return Snippet({ lang: 'typescript', code: this.code });
  }

  get stylesheetSnippet() {
    return Snippet({ lang: 'scss', code: this.stylesheet });
  }

  constructor() { }
}
