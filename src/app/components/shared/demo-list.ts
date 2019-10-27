import { Injectable } from '@angular/core';

export interface DemoConfig {
  title: string;
  code?: string;
  markup?: string;
  type: any;
  showCode?: boolean;
  stylesheet?: string;
}

export interface DemoListConfig { [demo: string]: DemoConfig; }

export interface DemoOverviewConfig { [anchor: string]: string; }

@Injectable({ providedIn: 'root' })
export class DemoList {
  private _demos: { [widget: string]: DemoListConfig } = {};

  private _overviews: { [widget: string]: DemoOverviewConfig } = {};


  register(widget: string, list: DemoListConfig, overview?: DemoOverviewConfig) {
    this._demos[widget] = list;
    if (overview) {
      this._overviews[widget] = overview;
    }
  }

  getDemos(widget: string) {
    return this._demos[widget];
  }

  getOverviewSections(widget: string) {
    const overview = this._overviews[widget];
    const sections = {};
    if (overview) {
      Object.keys(overview).forEach(fragment => { sections[fragment] = { fragment, title: overview[fragment] }; });
    }
    return sections;
  }
}
