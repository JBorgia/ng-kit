import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DemoList } from '../demo-list';

@Component({
  template: `<app-widget-demo
      *ngFor="let demo of demos"
      [id]="demo.id"
      [demoTitle]="demo.title"
      [code]="demo.code"
      [markup]="demo.markup"
      [stylesheet]="demo.stylesheet"
      [component]="component"
      [showCode]="demo.showCode">
      <ng-template [ngComponentOutlet]="demo.type"></ng-template>
    </app-widget-demo>`
})
export class ExamplesPageComponent {
  component: string;
  demos = [];

  constructor(route: ActivatedRoute, demoList: DemoList) {
    // We go up to parent route defining /components/:widget to read the widget name
    // This route is declared in root app.routing.ts.
    const componentName = (this.component =
      route.parent.parent.snapshot.url[1].path);
    if (componentName) {
      const demos = demoList.getDemos(componentName);
      if (demos) {
        this.demos = Object.keys(demos).map(id => {
          return { id, ...demos[id] };
        });
      }
    }
  }
}
