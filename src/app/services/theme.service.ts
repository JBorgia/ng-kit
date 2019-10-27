import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class ThemeService {

  userThemes = {
    'light-theme': {
      name: 'Light Theme',
      active: false,
    },
    'dark-theme': {
      name: 'Dark Theme',
      active: false,
    },
  };

  private themeSubj: ReplaySubject<UserPreferences> = new ReplaySubject<UserPreferences>();

  constructor() {
  }

  getPrefs() {
    return this.themeSubj;
  }

  setActiveTheme(setTheme) {
    for (const [index, iterator] of Object.entries(this.userThemes)) {
      if (setTheme === index) {
        iterator.active = true;
      } else {
        iterator.active = false;
      }
    }
  }

}

export interface UserPreferences {
  theme?: string;
}

export interface UserThemes {
  [theme: string]: string;
}
