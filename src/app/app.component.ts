import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LayoutComponent } from './layout/layout.component';
import { filter } from 'rxjs';
import { ScrollService } from './shared/services/scroll/scroll.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  /**
   *
   */
  constructor(private translate: TranslateService,
    private _scrollService: ScrollService
  ) { }

  ngOnInit(): void {
    this.onSetBroserLang();
    this._scrollService.navigateToSection(window.location.pathname);
  }
  protected onSetBroserLang(): void {
    const browserLang = this.translate.getBrowserLang();
    if (browserLang) { this.translate.use(RegExp(/en|es/).exec(browserLang) ? browserLang : 'en'); };

    document.documentElement.lang = this.translate.currentLang;

    // Listen to language changes and update the <html> lang attribute
    this.translate.onLangChange.subscribe((event) => {
      document.documentElement.lang = event.lang;
    });
  }
}
