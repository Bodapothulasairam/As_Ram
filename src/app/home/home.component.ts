import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule, MatButtonModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // Personal Information
  greetingText: string = "👋 Hello, I'm";
  name: string = "Sairam Bodapothula";
  designation: string = "Full-Stack Developer";
  tagline: string = "Building scalable solutions with modern technologies";
  
  // Dynamic typing effect text
  typingTexts: string[] = [
    "Full-Stack Developer",
    "Cloud Solutions Architect", 
    "DevOps Engineer",
    "Problem Solver"
  ];
  currentTypingIndex: number = 0;
  currentText: string = "";
  isDeleting: boolean = false;
  
  // Skills badges
  skills: string[] = [
    "Java", "Spring Boot", "Angular", "TypeScript", 
    "Microsoft Azure", "Docker", "CI/CD", "Microservices"
  ];
  
  // Stats
  stats = [
    { label: "Years Experience", value: "5+", icon: "" },
    { label: "Projects Completed", value: "10+", icon: "" },
    { label: "Technologies", value: "15+", icon: "⚡" },
    { label: "Certifications", value: "3", icon: "🏆" }
  ];
  
  // Enhanced overview
  overview = "Passionate Software Engineer with 5+ years of expertise in full-stack development, cloud solutions, and DevOps practices. Certified in Oracle Java SE 8, Microsoft Azure, and DevOps. I specialize in creating scalable, secure applications and mentoring teams to deliver innovative solutions.";

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startTypingAnimation();
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.addScrollAnimations();
    }
  }

  startTypingAnimation() {
    if (!isPlatformBrowser(this.platformId)) return;
    
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const type = () => {
      const currentFullText = this.typingTexts[this.currentTypingIndex];
      
      if (this.isDeleting) {
        this.currentText = currentFullText.substring(0, this.currentText.length - 1);
      } else {
        this.currentText = currentFullText.substring(0, this.currentText.length + 1);
      }

      let timeout = this.isDeleting ? deleteSpeed : typeSpeed;

      if (!this.isDeleting && this.currentText === currentFullText) {
        timeout = pauseTime;
        this.isDeleting = true;
      } else if (this.isDeleting && this.currentText === '') {
        this.isDeleting = false;
        this.currentTypingIndex = (this.currentTypingIndex + 1) % this.typingTexts.length;
        timeout = 500;
      }

      setTimeout(() => type(), timeout);
    };

    type();
  }

  addScrollAnimations() {
    if (!isPlatformBrowser(this.platformId) || typeof IntersectionObserver === 'undefined') {
      setTimeout(() => {
        if (isPlatformBrowser(this.platformId)) {
          document.querySelectorAll('.animate-on-scroll').forEach(el => {
            el.classList.add('animate-fade-up');
          });
        }
      }, 100);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }

  scrollToProjects() {
    if (!isPlatformBrowser(this.platformId)) return;
    
    // Scroll to projects section (3 sections down)
    window.scrollBy({ top: window.innerHeight * 3, behavior: 'smooth' });
  }

  openSocial(platform: string) {
    if (!isPlatformBrowser(this.platformId)) return;
    
    const urls = {
      'LinkedIn': 'https://www.linkedin.com/in/sairam-bodapothula/',
      'Github': 'https://github.com/Bodapothulasairam',
      'Instagram': 'https://www.instagram.com/sairamchowdary687/',
      'Twitter': 'https://twitter.com/sairam_dev',
      'Email': 'mailto:sairam.bodapothula@example.com'
    };
    
    if (urls[platform as keyof typeof urls]) {
      window.open(urls[platform as keyof typeof urls], '_blank');
    }
  }

  downloadResume() {
    if (!isPlatformBrowser(this.platformId)) return;
    
    const link = document.createElement('a');
    link.href = 'assets/resume/Sairam_Bodapothula_Resume.pdf';
    link.download = 'Sairam_Bodapothula_Resume.pdf';
    link.click();
  }
}