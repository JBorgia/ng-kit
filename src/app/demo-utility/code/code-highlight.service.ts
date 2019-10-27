import 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-typescript';

import { Injectable } from '@angular/core';

declare var Prism: any;


// Prism tries to highlight the whole document on DOMContentLoad.
// Unfortunately with webpack the only way of disabling it
// is by simply forcing it to highlight no elements -> []
Prism.hooks.add('before-highlightall', (env) => {
  env['elements'] = [];
});

@Injectable()
export class CodeHighlightService {

  highlight(code: string, lang: string) {
    return Prism.highlight(code.trim(), Prism.languages[lang], lang);
  }

}
