import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section';
import { ProfileSummaryComponent } from '../../components/profile-summary/profile-summary';
import { ExperienceTimelineComponent } from '../../components/experience-timeline/experience-timeline';
import { SkillsPanelComponent } from '../../components/skills-panel/skills-panel';
import { EducationSectionComponent } from '../../components/education-section/education-section';

@Component({
  selector: 'app-resume-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    ProfileSummaryComponent,
    ExperienceTimelineComponent,
    SkillsPanelComponent,
    EducationSectionComponent,
  ],
  templateUrl: './resume-home.html',
  styleUrl: './resume-home.scss'
})
export class ResumeHomeComponent {}
