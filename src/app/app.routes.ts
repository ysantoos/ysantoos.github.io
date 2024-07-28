import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { SkillsComponent } from './pages/skills/skills.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'certifications', component: CertificationsComponent },
    { path: 'skills', component: SkillsComponent },
    { path: '**', redirectTo: '/home' }
];
