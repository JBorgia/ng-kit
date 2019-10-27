import { ensureFileSync, writeFileSync } from 'fs-extra';
import * as glob from 'glob';

import { parseOutApiDocs } from './api-doc';

/**
 * Extracts documentation from all ng-bootstrap sources to a single TS file
 * used by the demo application
 */

const file = 'src/api-docs.ts';
const fileNames = glob.sync('projects/ng-kit/src/lib/**/*.ts', {
  ignore: ['projects/ng-kit/src/lib/**/*.spec.ts', 'projects/ng-kit/src/lib/util/**']
});

const json = JSON.stringify(parseOutApiDocs(fileNames), null, 2);

ensureFileSync(file);
writeFileSync(file, `const API_DOCS = ${json};\n\nexport default API_DOCS;`);
