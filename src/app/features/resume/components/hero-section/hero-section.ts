import { AfterViewInit, Component, ElementRef, inject } from '@angular/core';
import gsap from 'gsap';
import { resumeProfile } from '../../../../data/resume.data';
import { GsapAnimationService } from '../../../../core/animations/gsap-animation.service';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSectionComponent implements AfterViewInit {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly animations = inject(GsapAnimationService);

  profile = resumeProfile;

  ngAfterViewInit(): void {
    const ctx = gsap.context(() => {
      this.animations.revealFromBottom('.hero-animate');
      this.animations.floating('.orbit-card');
      this.animations.pulse('.status-dot');
    }, this.host.nativeElement);

    this.host.nativeElement.addEventListener('destroy', () => ctx.revert());
  }
}

