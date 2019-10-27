import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ThemeService } from '@services/theme.service';

declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Output() toggleSidebar = new EventEmitter<void>();
  @ViewChild('profileMiniToggle', { static: true }) profileMiniToggle;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
  }

  get themeChoices() {
    return this.themeService.userThemes;
  }

  onChange(selectedTheme) {
    this.themeService.getPrefs().next({ theme: selectedTheme });
    localStorage.setItem('theme', selectedTheme);
    this.themeService.setActiveTheme(selectedTheme);
  }

}
