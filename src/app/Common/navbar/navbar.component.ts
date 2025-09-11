import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, AfterViewInit {
  activeSection: string = 'home';
  isMobileMenuOpen: boolean = false;
  isScrolled: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupScrollListener();
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateActiveSection();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (!isPlatformBrowser(this.platformId)) return;
    
    this.isScrolled = window.scrollY > 50;
    this.updateActiveSection();
  }

  setupScrollListener() {
    if (!isPlatformBrowser(this.platformId)) return;

    window.addEventListener('scroll', () => {
      this.updateActiveSection();
    });
  }

  updateActiveSection() {
    if (!isPlatformBrowser(this.platformId)) return;

    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    // More precise section detection
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    let currentSection = 'home';
    
    // Check each section with better thresholds
    for (let i = 0; i < sections.length; i++) {
      const sectionElement = document.getElementById(sections[i]);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop - 100; // Account for navbar
        const sectionBottom = sectionTop + sectionElement.offsetHeight;
        
        if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
          currentSection = sections[i];
          break;
        }
      }
    }
    
    // Fallback to simple calculation if elements not found
    if (currentSection === 'home') {
      const sectionIndex = Math.floor(scrollTop / (windowHeight * 0.8)); // More conservative threshold
      if (sectionIndex >= 0 && sectionIndex < sections.length) {
        currentSection = sections[sectionIndex];
      }
    }
    
    // Update active section and URL hash
    if (this.activeSection !== currentSection) {
      this.activeSection = currentSection;
      // Update URL hash without triggering navigation
      history.replaceState(null, '', `#${currentSection}`);
    }
  }

  navigateToSection(section: string) {
    if (!isPlatformBrowser(this.platformId)) return;
    
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      const targetY = sectionElement.offsetTop - 50; // Account for fixed navbar
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
      
      // Update URL hash
      history.replaceState(null, '', `#${section}`);
    } else {
      // Fallback to simple calculation
      const sectionIndex = ['home', 'about', 'skills', 'projects', 'contact'].indexOf(section);
      if (sectionIndex !== -1) {
        const targetY = sectionIndex * window.innerHeight;
        window.scrollTo({
          top: targetY,
          behavior: 'smooth'
        });
        
        // Update URL hash
        history.replaceState(null, '', `#${section}`);
      }
    }
    
    // Close mobile menu
    this.isMobileMenuOpen = false;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.modern-navbar')) {
      this.isMobileMenuOpen = false;
    }
  }
}