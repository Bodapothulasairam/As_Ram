import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: Skill[];
}

interface Competency {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit, AfterViewInit {
  skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: 'fas fa-code',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      skills: [
        { name: 'Java', level: 95, icon: 'fab fa-java', color: '#f89820' },
        { name: 'Python', level: 90, icon: 'fab fa-python', color: '#3776ab' },
        { name: 'JavaScript', level: 95, icon: 'fab fa-js-square', color: '#f7df1e' },
        { name: 'TypeScript', level: 90, icon: 'fab fa-js-square', color: '#3178c6' },
        { name: 'SQL', level: 85, icon: 'fas fa-database', color: '#336791' },
        { name: 'C/C++', level: 80, icon: 'fas fa-code', color: '#00599c' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: 'fas fa-layer-group',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      skills: [
        { name: 'Spring Boot', level: 95, icon: 'fas fa-leaf', color: '#6db33f' },
        { name: 'React.js', level: 90, icon: 'fab fa-react', color: '#61dafb' },
        { name: 'Spring MVC', level: 90, icon: 'fas fa-leaf', color: '#6db33f' },
        { name: 'Hibernate', level: 85, icon: 'fas fa-database', color: '#bcae79' },
        { name: 'JUnit', level: 85, icon: 'fas fa-vial', color: '#25a162' },
        { name: 'Apache Spark', level: 80, icon: 'fas fa-fire', color: '#e25a1c' }
      ]
    },
    {
      title: 'Databases',
      icon: 'fas fa-database',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      skills: [
        { name: 'PostgreSQL', level: 90, icon: 'fas fa-database', color: '#336791' },
        { name: 'MongoDB', level: 85, icon: 'fas fa-database', color: '#47a248' },
        { name: 'MySQL', level: 90, icon: 'fas fa-database', color: '#4479a1' },
        { name: 'Oracle', level: 80, icon: 'fas fa-database', color: '#f80000' }
      ]
    },
    {
      title: 'Web & APIs',
      icon: 'fas fa-globe',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      skills: [
        { name: 'RESTful APIs', level: 95, icon: 'fas fa-plug', color: '#00d9ff' },
        { name: 'GraphQL', level: 85, icon: 'fas fa-project-diagram', color: '#e10098' },
        { name: 'SOAP', level: 80, icon: 'fas fa-exchange-alt', color: '#ff6b6b' },
        { name: 'Kafka', level: 75, icon: 'fas fa-stream', color: '#231f20' }
      ]
    },
    {
      title: 'Tools & Methodologies',
      icon: 'fas fa-tools',
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      skills: [
        { name: 'Git', level: 95, icon: 'fab fa-git-alt', color: '#f05032' },
        { name: 'Docker', level: 85, icon: 'fab fa-docker', color: '#2496ed' },
        { name: 'Jenkins', level: 80, icon: 'fas fa-cogs', color: '#d24939' },
        { name: 'Agile/Scrum', level: 90, icon: 'fas fa-users', color: '#00d9ff' },
        { name: 'CI/CD', level: 85, icon: 'fas fa-sync-alt', color: '#ff6b6b' },
        { name: 'TDD', level: 85, icon: 'fas fa-vial', color: '#25a162' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: 'fas fa-cloud',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      skills: [
        { name: 'AWS', level: 80, icon: 'fab fa-aws', color: '#ff9900' },
        { name: 'Azure', level: 75, icon: 'fab fa-microsoft', color: '#0078d4' },
        { name: 'Kubernetes', level: 70, icon: 'fas fa-cubes', color: '#326ce5' },
        { name: 'Microservices', level: 85, icon: 'fas fa-puzzle-piece', color: '#00d9ff' },
        { name: 'Distributed Systems', level: 80, icon: 'fas fa-network-wired', color: '#ff6b6b' }
      ]
    }
  ];

  additionalCompetencies: Competency[] = [
    { name: 'Algorithm Design', icon: 'fas fa-brain' },
    { name: 'Data Structures', icon: 'fas fa-sitemap' },
    { name: 'Code Reviews', icon: 'fas fa-search' },
    { name: 'Debugging', icon: 'fas fa-bug' },
    { name: 'Problem Solving', icon: 'fas fa-lightbulb' },
    { name: 'Cross-functional Collaboration', icon: 'fas fa-handshake' },
    { name: 'Innovation', icon: 'fas fa-rocket' },
    { name: 'Complexity Analysis', icon: 'fas fa-chart-line' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.animateSkills();
    }
  }

  getSkillLevelColor(level: number): string {
    if (level >= 90) return 'linear-gradient(90deg, #00d9ff, #00ff88)';
    if (level >= 80) return 'linear-gradient(90deg, #00d9ff, #0099ff)';
    if (level >= 70) return 'linear-gradient(90deg, #ff6b6b, #ffa500)';
    return 'linear-gradient(90deg, #ff6b6b, #ff4757)';
  }

  private animateSkills(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item) => {
      observer.observe(item);
    });
  }
}

