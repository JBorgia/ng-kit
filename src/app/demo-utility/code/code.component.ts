import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';

import { CodeHighlightService } from './code-highlight.service';
import { ISnippet } from './snippet';

@Component({
  selector: 'app-code',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<pre class="language-{{ snippet.lang }}"><code #code class="language-{{ snippet.lang }}"></code></pre>`,
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements AfterViewInit {

  @ViewChild('code', { static: true }) codeEl: ElementRef<HTMLElement>;

  @Input() snippet: ISnippet;

  constructor(private _service: CodeHighlightService) { }

  ngAfterViewInit() {
    this.codeEl.nativeElement.innerHTML = this._service.highlight(this.snippet.code, this.snippet.lang);
  }
}
