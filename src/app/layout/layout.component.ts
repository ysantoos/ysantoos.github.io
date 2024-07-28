import { Component } from '@angular/core';
import { NavbarComponent } from '../pages/navbar/navbar.component';
import { HomeComponent } from '../pages/home/home.component';
import { AboutComponent } from '../pages/about/about.component';
import { SkillsComponent } from '../pages/skills/skills.component';
import { CertificationsComponent } from '../pages/certifications/certifications.component';
import { FooterComponent } from '../pages/footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    CertificationsComponent,
    FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
