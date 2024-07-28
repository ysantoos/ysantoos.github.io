import { Component } from '@angular/core';
import { ScrollService } from '../../shared/services/scroll/scroll.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private _scrollService: ScrollService) {
  }

  onKeydown(event: KeyboardEvent, section: string) {
    this._scrollService.onKeydown(event, section);
  }

  onNavigateToSection(section: string) {
    this._scrollService.navigateToSection(section);
  }
}
