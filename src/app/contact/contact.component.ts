import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactInfo {
  title: string;
  value: string;
  icon: string;
  color: string;
  link?: string;
  action?: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

interface ContactStat {
  number: string;
  label: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit, AfterViewInit {
  formData: FormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting: boolean = false;

  contactInfo: ContactInfo[] = [
    {
      title: 'Email',
      value: 'sairambodapothula0990@gmail.com',
      icon: 'fas fa-envelope',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      link: 'mailto:sairambodapothula0990@gmail.com',
      action: 'Send Email'
    },
    {
      title: 'Phone',
      value: '+1 (573) 647-4099',
      icon: 'fas fa-phone',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      link: 'tel:+15736474099',
      action: 'Call Now'
    },
    {
      title: 'Location',
      value: 'Jefferson City, MO',
      icon: 'fas fa-map-marker-alt',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      action: 'View on Map'
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/sairam-bodapothula',
      icon: 'fab fa-linkedin',
      color: 'linear-gradient(135deg, #0077b5 0%, #005885 100%)',
      link: 'https://linkedin.com/in/sairam-bodapothula',
      action: 'Connect'
    }
  ];

  socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/Bodapothulasairam',
      icon: 'fab fa-github',
      color: 'linear-gradient(135deg, #333 0%, #000 100%)'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sairambodapothula/',
      icon: 'fab fa-linkedin',
      color: 'linear-gradient(135deg, #0077b5 0%, #005885 100%)'
    },
    {
      name: 'X',
      url: 'https://x.com/Sairam687',
      icon: 'fab fa-twitter',
      color: 'linear-gradient(135deg, #1da1f2 0%, #0d8bd9 100%)'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/ram_the_only_1',
      icon: 'fab fa-instagram',
      color: 'linear-gradient(135deg, #e4405f 0%, #c13584 100%)'
    }
  ];

  contactStats: ContactStat[] = [
    { number: '24h', label: 'Response Time' },
    { number: '100%', label: 'Project Success' },
    { number: '5+', label: 'Years Experience' },
    { number: '20+', label: 'Projects Completed' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.animateElements();
    }
  }

  onSubmit(): void {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', this.formData);
      this.isSubmitting = false;
      
      // Reset form
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      
      // Show success message (you can implement a toast notification here)
      alert('Message sent successfully! I\'ll get back to you soon.');
    }, 2000);
  }

  private animateElements(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.info-card, .contact-form-container, .stat-item');
    elements.forEach((element) => {
      observer.observe(element);
    });
  }
}
