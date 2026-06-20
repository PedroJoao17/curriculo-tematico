import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { education } from '../../../../data/resume.data';

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './education-section.html',
  styleUrl: './education-section.scss'
})
export class EducationSectionComponent {
  education = education;
}

