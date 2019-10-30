import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ThemeService } from '@services/theme.service';

declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

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
