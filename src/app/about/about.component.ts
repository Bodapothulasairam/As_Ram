import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule, 
    MatCardModule,
    MatChipsModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit, AfterViewInit {
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Component initialization
  }
  email: string = "sairam.bodapothula@gmail.com";

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.addScrollAnimations();
    }
  }

  addScrollAnimations() {
    if (!isPlatformBrowser(this.platformId)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
  }

  scrollToSection(section: string) {
    if (!isPlatformBrowser(this.platformId)) return;
    
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      const targetY = sectionElement.offsetTop - 70; // Account for fixed navbar
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
    }
  }
}
