import { Routes } from '@angular/router';
import { ResumeHomeComponent } from './features/resume/pages/resume-home/resume-home';

export const routes: Routes = [
  {
    path: '',
    component: ResumeHomeComponent,
    title: 'Currículo Temático | João Pedro'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
