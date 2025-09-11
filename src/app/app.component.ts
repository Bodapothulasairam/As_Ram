import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NavbarComponent } from './Common/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'as-ram';
  
  private currentSection = 0;
  private sections: string[] = ['home', 'about', 'skills', 'projects', 'contact'];
  private isScrolling = false;
  private scrollTimeout: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupScrollListener();
      this.setupKeyboardNavigation();
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Scroll to top on page load
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  setupScrollListener() {
    if (!isPlatformBrowser(this.platformId)) return;

    let lastScrollTop = 0;
    let scrollDirection = 'down';

    window.addEventListener('scroll', () => {
      if (this.isScrolling) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Determine scroll direction
      scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
      lastScrollTop = scrollTop;

      // Clear existing timeout
      clearTimeout(this.scrollTimeout);

      // Set timeout to detect end of scroll
      this.scrollTimeout = setTimeout(() => {
        this.handleScrollEnd(scrollDirection);
      }, 150);
    });
  }

  setupKeyboardNavigation() {
    if (!isPlatformBrowser(this.platformId)) return;

    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown' || event.key === 'PageDown') {
        event.preventDefault();
        this.scrollToNextSection();
      } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        event.preventDefault();
        this.scrollToPreviousSection();
      } else if (event.key === 'Home') {
        event.preventDefault();
        this.scrollToSection(0);
      } else if (event.key === 'End') {
        event.preventDefault();
        this.scrollToSection(this.sections.length - 1);
      }
    });
  }

  handleScrollEnd(direction: string) {
    if (this.isScrolling) return;

    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const sectionHeight = windowHeight;

    // Calculate which section we should be in
    const targetSection = Math.round(scrollTop / sectionHeight);
    
    // Clamp to valid range
    const clampedSection = Math.max(0, Math.min(targetSection, this.sections.length - 1));

    if (clampedSection !== this.currentSection) {
      this.currentSection = clampedSection;
      this.scrollToSection(this.currentSection, true);
    }
  }

  scrollToNextSection() {
    if (this.currentSection < this.sections.length - 1) {
      this.scrollToSection(this.currentSection + 1);
    }
  }

  scrollToPreviousSection() {
    if (this.currentSection > 0) {
      this.scrollToSection(this.currentSection - 1);
    }
  }

  scrollToSection(sectionIndex: number, smooth = true) {
    if (!isPlatformBrowser(this.platformId)) return;
    if (sectionIndex < 0 || sectionIndex >= this.sections.length) return;

    this.isScrolling = true;
    this.currentSection = sectionIndex;

    const targetY = sectionIndex * window.innerHeight;
    
    window.scrollTo({
      top: targetY,
      behavior: smooth ? 'smooth' : 'auto'
    });

    // Update URL without triggering navigation
    const sectionName = this.sections[sectionIndex];
    history.replaceState(null, '', `#${sectionName}`);

    // Reset scrolling flag after animation
    setTimeout(() => {
      this.isScrolling = false;
    }, 1000);
  }

  // Public method to be called from navbar
  navigateToSection(sectionName: string) {
    const sectionIndex = this.sections.indexOf(sectionName);
    if (sectionIndex !== -1) {
      this.scrollToSection(sectionIndex);
    }
  }
}
