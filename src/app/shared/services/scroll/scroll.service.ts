import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(private router: Router) { }


  private scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  public onKeydown(event: KeyboardEvent, section: string) {
    const element = document.getElementById(section);
    if ((event.key === 'Enter' || event.key === ' ') && element) {
      event.preventDefault();
      this.navigateToSection(section);
    }
  }

  public navigateToSection(section: string) {
    this.router.navigate([section]).then(() => {
      this.scrollToSection(section.replace("/",""));
    });
  }
}
