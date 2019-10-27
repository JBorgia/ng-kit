import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from '@services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  theme: string;

  constructor(private renderer: Renderer2, private themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.subscription = this.themeService.getPrefs().subscribe(prefs => {
      this.renderer.setAttribute(document.body, 'data-theme', prefs.theme);
    });
    this.checkStorage();
  }

  checkStorage() {
    if (!localStorage.getItem('theme')) {
      const lightTheme = 'light-theme';
      this.themeService.getPrefs().next({ theme: lightTheme });
      localStorage.setItem('theme', lightTheme);
      this.themeService.setActiveTheme(lightTheme);
    } else {
      const localStorageTheme = localStorage.getItem('theme');
      this.themeService.getPrefs().next({ theme: localStorageTheme });
      this.themeService.setActiveTheme(localStorageTheme);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
