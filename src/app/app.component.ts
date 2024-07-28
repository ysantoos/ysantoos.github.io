import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {

  /**
   *
   */
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    const browserLang = this.translate.getBrowserLang();
    if(browserLang){this.translate.use(RegExp(/en|es/).exec(browserLang) ? browserLang : 'en');}
  }
}
