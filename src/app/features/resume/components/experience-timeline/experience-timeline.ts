import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { experiences } from '../../../../data/resume.data';

@Component({
  selector: 'app-experience-timeline',
  standalone: true,
  imports: [NgFor],
  templateUrl: './experience-timeline.html',
  styleUrl: './experience-timeline.scss'
})
export class ExperienceTimelineComponent {
  experiences = experiences;
}

