import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { resumeProfile } from '../../../../data/resume.data';

@Component({
  selector: 'app-profile-summary',
  standalone: true,
  imports: [NgFor],
  templateUrl: './profile-summary.html',
  styleUrl: './profile-summary.scss'
})
export class ProfileSummaryComponent {
  summary = resumeProfile.summary;
}

