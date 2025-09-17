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
  isNavigating: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupScrollListener();
      this.handleInitialRoute();
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

  handleInitialRoute() {
    if (!isPlatformBrowser(this.platformId)) return;
    
    // Check if there's a hash in the URL
    const hash = window.location.hash.substring(1);
    const validSections = ['home', 'about', 'skills', 'projects', 'contact'];
    
    if (hash && validSections.includes(hash)) {
      // Navigate to the section specified in the hash
      setTimeout(() => {
        this.navigateToSection(hash);
      }, 100);
    } else {
      // Default to home section
      this.activeSection = 'home';
    }
  }

  updateActiveSection() {
    if (!isPlatformBrowser(this.platformId) || this.isNavigating) return;

    const scrollTop = window.pageYOffset;
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    let currentSection = 'home';
    
    // Find the section that's currently in view
    for (let i = sections.length - 1; i >= 0; i--) {
      const sectionElement = document.getElementById(sections[i]);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop - 150; // Account for navbar and some buffer
        
        if (scrollTop >= sectionTop) {
          currentSection = sections[i];
          break;
        }
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
    
    console.log(`Navigating to section: ${section}`); // Debug log
    
    // Close mobile menu first
    this.isMobileMenuOpen = false;
    
    // Update active section immediately
    this.activeSection = section;
    
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      const targetY = sectionElement.offsetTop - 70; // Account for fixed navbar height
      console.log(`Scrolling to ${section} at position: ${targetY}`); // Debug log
      
      // Temporarily disable scroll detection to prevent interference
      this.isNavigating = true;
      
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
      
      // Re-enable scroll detection after navigation completes
      setTimeout(() => {
        this.isNavigating = false;
      }, 1000);
      
      // Update URL hash
      history.replaceState(null, '', `#${section}`);
    } else {
      console.error(`Section with id "${section}" not found. Available sections:`, 
        ['home', 'about', 'skills', 'projects', 'contact'].map(id => ({
          id,
          element: document.getElementById(id) ? 'found' : 'not found'
        }))
      );
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.modern-navbar')) {
      this.isMobileMenuOpen = false;
    }
  }
}