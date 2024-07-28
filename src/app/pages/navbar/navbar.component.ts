import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  scrollToSection(section: string){
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onKeydown(event: KeyboardEvent, section: string) {
    const element = document.getElementById(section);
    if ((event.key === 'Enter' || event.key === ' ') && element) {
      event.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
