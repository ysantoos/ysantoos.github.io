import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollService } from '../../shared/services/scroll/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  /**
   *
   */
  constructor(private _scrollService: ScrollService) {
  }

  onKeydown(event: KeyboardEvent, section: string) {
    this._scrollService.onKeydown(event, section);
  }

  onNavigateToSection(section: string) {
    this._scrollService.navigateToSection(section);
  }

}
