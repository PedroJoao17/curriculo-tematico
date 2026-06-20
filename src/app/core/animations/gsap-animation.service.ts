import { Injectable } from '@angular/core';
import gsap from 'gsap';

@Injectable({
  providedIn: 'root'
})
export class GsapAnimationService {
  revealFromBottom(targets: gsap.TweenTarget, delay = 0): gsap.core.Tween {
    return gsap.from(targets, {
      y: 40,
      opacity: 0,
      duration: 0.9,
      delay,
      ease: 'power3.out',
      stagger: 0.12
    });
  }

  floating(target: gsap.TweenTarget): gsap.core.Tween {
    return gsap.to(target, {
      y: -16,
      duration: 2.4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }

  pulse(target: gsap.TweenTarget): gsap.core.Tween {
    return gsap.to(target, {
      scale: 1.04,
      duration: 1.6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }
}
