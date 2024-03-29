import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import docs from '../../../../api-docs';
import { ClassDesc, DirectiveDesc, InputDesc, MethodDesc, PropertyDesc, signature } from './api-docs.model';

/**
 * Displays the API docs of a directive.
 *
 * The default values of its inputs are looked for in the directive api doc itself, or in the matching property
 * of associated Config service, if any.
 *
 * The config service of a directive Foo is, by convention, named FooConfig.
 */
@Component({
  selector: 'app-api-docs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './api-docs.component.html',
  styleUrls: ['./api-docs.component.scss']
})
export class ApiDocsComponent {

  /**
   * Object which contains, for each input name of the directive, the corresponding property of the associated config
   * service (if any)
   */
  private _configProperties: { [propertyName: string]: PropertyDesc };

  apiDocs: DirectiveDesc;
  configServiceName: string;

  constructor() { }

  @Input() set directive(directiveName: string) {
    this.apiDocs = docs[directiveName];
    this.configServiceName = `${directiveName}Config`;
    const configApiDocs = docs[this.configServiceName];
    this._configProperties = {};
    if (configApiDocs) {
      this.apiDocs.inputs.forEach(
        input => this._configProperties[input.name] = this._findInputConfigProperty(configApiDocs, input));
    }
  }

  /**
   * Returns the default value of the given directive input by first looking for it in the matching config service
   * property. If there is no matching config property, it reads it from the input.
   */
  defaultInputValue(input: InputDesc): string {
    const configProperty = this._configProperties[input.name];
    return configProperty ? configProperty.defaultValue : input.defaultValue;
  }

  /**
   * Returns true if there is a config service property matching with the given directive input
   */
  hasConfigProperty(input: InputDesc): boolean {
    return !!this._configProperties[input.name];
  }

  methodSignature(method: MethodDesc): string { return signature(method); }

  private _findInputConfigProperty(configApiDocs: ClassDesc, input: InputDesc): PropertyDesc {
    return configApiDocs.properties.filter(prop => prop.name === input.name)[0];
  }
}
