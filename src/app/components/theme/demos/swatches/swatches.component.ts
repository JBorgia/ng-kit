import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from '@services/theme.service';
import { Subscription } from 'rxjs';

/* tslint:disable:object-literal-key-quotes */

export interface ColorHash {
  colorHex: string;
}

export interface ThemeHash {
  themeName: string;
  themeValue: string;
  swatches: {
    [key: string]: ColorHash
  };
}

@Component({
  selector: 'app-swatches',
  templateUrl: './swatches.component.html',
  styleUrls: ['./swatches.component.scss']
})
export class SwatchesComponent implements OnInit, OnDestroy {

  constructor(private themeService: ThemeService) { }

  private themeSub: Subscription;
  colorSwatches: ThemeHash;
  currentTheme: string;

  private themeMapLight: ThemeHash = {
    themeName: 'Light Theme',
    themeValue: 'light-theme',
    swatches: {
      'Theme Color Primary': {
        colorHex: '#3E72C7'
      },
      'Theme Color Dark': {
        colorHex: '#325ea7'
      },
      'Theme Color Light': {
        colorHex: '#3d84f9'
      },
      'Pale Sky': {
        colorHex: '#4B5263'
      },
      'Gray Chateau': {
        colorHex: '#6E7687'
      },
      'Alabaster': {
        colorHex: '#F7F7F7'
      },
      'Aqua Haze': {
        colorHex: '#F4F6F9'
      },
      'Heather': {
        colorHex: '#B6BECC'
      },
    }
  };

  private themeMapDark: ThemeHash = {
    themeName: 'Dark Theme',
    themeValue: 'dark-theme',
    swatches: {
      'Theme Color Primary': {
        colorHex: '#217e88',
      },
      'Theme Color Dark': {
        colorHex: '#196169',
      },
      'Theme Color Light': {
        colorHex: '#36C8D5',
      },
      'Shark': {
        colorHex: '#272C33',
      },
      'Woodsmoke': {
        colorHex: '#20252A',
      },
      'Azure': {
        colorHex: '#3D4554',
      },
      'Fog': {
        colorHex: '#B5B9C0',
      },
      'Mischka': {
        colorHex: '#eeeff1',
      },
    }
  };

  private colorThemes: ThemeHash[] = [
    this.themeMapLight,
    this.themeMapDark
  ];

  ngOnInit() {
    this.organizeSwatches(this.colorThemes);
  }

  organizeSwatches(swatchThemes): void {
    this.themeSub = this.themeService.getPrefs().subscribe(prefs => {
      for (const theme of swatchThemes) {
        if (theme.themeValue === prefs.theme) {
          this.colorSwatches = theme.swatches;
          this.currentTheme = theme.themeName;
        }
      }
    });
  }

  ngOnDestroy() {
    this.themeSub.unsubscribe();
  }

}
