import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  status: 'completed' | 'in-progress' | 'planned';
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  contributions: string[];
  impact: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule, MatIconModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  projects: Project[] = [
    {
      id: 1,
      title: 'MediTrack',
      description: 'Healthcare Patient Portal - Cloud-native patient management system',
      longDescription: 'A comprehensive healthcare platform that enables patients to book appointments, view lab results, and securely communicate with doctors. Built with microservices architecture and deployed on AWS.',
      image: 'assets/Images/meditrack.jpg',
      technologies: ['Java 17', 'Spring Boot 3', 'React 18', 'Redux', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes', 'AWS ECS/EKS', 'Jenkins', 'OAuth2/JWT'],
      category: 'Full-Stack',
      status: 'completed',
      features: [
        'Patient appointment booking system',
        'Secure lab results viewing',
        'HIPAA-compliant communication',
        'Real-time notifications',
        'Multi-tenant architecture'
      ],
      contributions: [
        'Designed RESTful APIs in Java Spring Boot for patient data, appointments, and notifications',
        'Built responsive frontend with React + Redux and secure login',
        'Implemented OAuth 2.0 / JWT authentication for HIPAA compliance',
        'Containerized microservices with Docker and deployed on AWS ECS/EKS',
        'Automated CI/CD with Jenkins + GitHub Actions, reducing release errors'
      ],
      impact: 'Reduced patient wait times by 40% and improved appointment scheduling efficiency'
    },
    {
      id: 2,
      title: 'FinFlow',
      description: 'Real-Time Transaction Dashboard - Fintech platform with fraud detection',
      longDescription: 'A sophisticated fintech platform providing real-time transaction tracking, fraud detection alerts, and comprehensive spending analytics with AI-powered insights.',
      image: 'assets/Images/finflow.jpg',
      technologies: ['Java 17', 'Spring Boot', 'Kafka', 'React', 'D3.js', 'Chart.js', 'Redis', 'Python Flask', 'Azure AKS', 'Terraform', 'PostgreSQL'],
      category: 'Full-Stack',
      status: 'completed',
      features: [
        'Real-time transaction streaming',
        'AI-based fraud detection',
        'Interactive spending analytics',
        'Event-driven microservices',
        'Redis caching optimization'
      ],
      contributions: [
        'Designed event-driven microservices using Spring Boot and Kafka for real-time transaction streaming',
        'Developed React dashboard with D3.js/Chart.js for visualization of spending trends',
        'Implemented Redis caching to reduce API latency by 25%',
        'Integrated AI-based fraud detection using lightweight ML model (Python Flask service)',
        'Deployed to Azure Kubernetes Service (AKS) with IaC using Terraform'
      ],
      impact: 'Achieved 25% reduction in API latency and 95% fraud detection accuracy'
    },
    {
      id: 3,
      title: 'Social Networks Analysis',
      description: 'Mutual Friends Analysis - Distributed algorithms for social graph processing',
      longDescription: 'Developed distributed algorithms in Apache Spark and Scala to compute and analyze mutual friends in social graphs using the LiveJournal dataset.',
      image: 'assets/Images/social-analysis.jpg',
      technologies: ['Apache Spark', 'Scala', 'HDFS', 'RDDs', 'Distributed Systems'],
      category: 'Big Data',
      status: 'completed',
      features: [
        'Distributed mutual friends computation',
        'Maximum/average count analysis',
        'Filtered results processing',
        'Optimized data structures',
        'Parallel processing with RDDs'
      ],
      contributions: [
        'Developed distributed algorithms in Apache Spark and Scala for social graph analysis',
        'Implemented variations for basic computation, maximum/average counts, and filtered results',
        'Optimized data structures (lists, sets) for efficient parallel processing with RDDs',
        'Conducted runtime measurement and HDFS output optimization'
      ],
      impact: 'Processed 4.8M social connections with 60% performance improvement'
    },
    {
      id: 4,
      title: 'Hadoop MapReduce System',
      description: 'Mutual Friends Computation - Scalable MapReduce implementation',
      longDescription: 'Built a comprehensive MapReduce job in Java to compute mutual friends from social data with custom mappers/reducers and advanced filtering capabilities.',
      image: 'assets/Images/hadoop.jpg',
      technologies: ['Java', 'Hadoop', 'MapReduce', 'HDFS', 'LinkedHashSet', 'Distributed Systems'],
      category: 'Big Data',
      status: 'completed',
      features: [
        'Custom mappers and reducers',
        'LinkedHashSet intersections',
        'Edge case handling',
        'Max/average calculations',
        'Scalable performance metrics'
      ],
      contributions: [
        'Built MapReduce job in Java for mutual friends computation from social data',
        'Implemented custom mappers/reducers with LinkedHashSets for intersections',
        'Extended functionality for max/average calculations and filters',
        'Ensured scalability and performance metrics optimization'
      ],
      impact: 'Achieved 3x faster processing compared to traditional approaches'
    },
    {
      id: 5,
      title: 'Book Reviews Analytics',
      description: 'MongoDB Analytics Platform - Large-scale book review analysis',
      longDescription: 'Imported and analyzed a massive JSON dataset of 8.9M book reviews using MongoDB aggregation pipelines and advanced query optimization techniques.',
      image: 'assets/Images/book-analytics.jpg',
      technologies: ['MongoDB', 'Aggregation Pipelines', 'JSON', 'Database Optimization', 'Regex Queries'],
      category: 'Database',
      status: 'completed',
      features: [
        'Large-scale JSON data import',
        'Advanced aggregation pipelines',
        'Rating and reviewer analysis',
        'Pattern recognition',
        'Query optimization'
      ],
      contributions: [
        'Imported and analyzed 8.9M book reviews dataset in MongoDB',
        'Used aggregation pipelines and queries (OR/AND, grouping, regex, sorting)',
        'Optimized for efficiency with collation and existence checks',
        'Conducted comprehensive ratings, reviewers, and pattern analysis'
      ],
      impact: 'Processed 8.9M records with 40% query performance improvement'
    },
    {
      id: 6,
      title: 'Supply Chain Integrator',
      description: 'Real-Time Data Synchronization - Distributed system for supply chain',
      longDescription: 'Developed a distributed system for low-latency real-time data synchronization in supply chain management with fault-tolerant design.',
      image: 'assets/Images/supply-chain.jpg',
      technologies: ['Java', 'Kafka', 'MongoDB', 'TDD', 'Distributed Systems', 'Fault Tolerance'],
      category: 'Backend',
      status: 'completed',
      features: [
        'Real-time data synchronization',
        'Low-latency processing',
        'Fault-tolerant design',
        'TDD implementation',
        'Complexity analysis'
      ],
      contributions: [
        'Developed distributed system in Java, Kafka, and MongoDB',
        'Applied TDD and complexity analysis for fault-tolerant design',
        'Implemented low-latency real-time data synchronization',
        'Based on Cloud and Big Data Management principles'
      ],
      impact: 'Achieved 99.9% uptime with sub-second data synchronization'
    },
    {
      id: 7,
      title: 'Gesture Detection System',
      description: 'Hand Tracking & Recognition - Real-time gesture detection using AI',
      longDescription: 'Developed a real-time hand tracking system using Python, Mediapipe, and OpenCV with 95% accuracy for interactive applications.',
      image: 'assets/Images/gesture-detection.jpg',
      technologies: ['Python', 'Mediapipe', 'OpenCV', 'NumPy', 'Scikit-learn', 'Computer Vision'],
      category: 'AI/ML',
      status: 'completed',
      features: [
        'Real-time hand tracking',
        '95% accuracy rate',
        'Dynamic gesture recognition',
        'Interactive drawing system',
        'Adaptive line thickness'
      ],
      contributions: [
        'Developed real-time hand tracking system using Python, Mediapipe, and OpenCV',
        'Achieved 95% accuracy in gesture recognition',
        'Engineered dynamic recognition for index finger pointing gestures with 98% accuracy',
        'Implemented adaptive line thickness based on fingertip points',
        'Extended model to recognize alphabets and numerical digits'
      ],
      impact: 'Achieved 95% accuracy in real-time gesture recognition'
    },
    {
      id: 8,
      title: 'Social Media Platform',
      description: 'Django Social Network - Full-featured social media website',
      longDescription: 'Developed a comprehensive social media website using Django that allows users to create profiles, connect with friends, and interact with content.',
      image: 'assets/Images/social-media.jpg',
      technologies: ['Python', 'Django', 'SQL', 'Bootstrap', 'GCP', 'Git', 'Authentication'],
      category: 'Full-Stack',
      status: 'completed',
      features: [
        'User profile creation',
        'Friend connection system',
        'Content commenting',
        'Responsive design',
        'Secure authentication'
      ],
      contributions: [
        'Developed social media website using Django stack',
        'Implemented Bootstrap for responsive design and mobile compatibility',
        'Utilized Django\'s built-in authentication system for secure user login',
        'Used Git for version control and team collaboration',
        'Hosted website using Google Cloud Platform'
      ],
      impact: 'Supported 1000+ concurrent users with responsive design'
    },
    {
      id: 9,
      title: 'Inventory Management System',
      description: 'Dual-Stack Web Application - MERN vs Django comparison',
      longDescription: 'Developed two comprehensive inventory management web applications using both MERN stack and Python-Django stack to compare performance and accessibility.',
      image: 'assets/Images/inventory.jpg',
      technologies: ['MERN Stack', 'Python-Django', 'AWS', 'GCP', 'SQLite', 'React', 'Node.js', 'Express'],
      category: 'Full-Stack',
      status: 'completed',
      features: [
        'Dynamic web pages',
        'Data display and entry',
        'Performance comparison',
        'Cross-functional collaboration',
        'Cloud deployment'
      ],
      contributions: [
        'Developed two web apps using MERN stack and Python-Django stack',
        'Conceptualized, created, and managed dynamic web pages for data display',
        'Differentiated performance and accessibility of resources by working on both stacks',
        'Collaborated with cross-functional teams for successful project delivery',
        'Hosted web applications using cloud services for both stacks'
      ],
      impact: 'Delivered 30% performance improvement with optimized stack selection'
    },
    {
      id: 10,
      title: 'Gold Chase Game',
      description: 'Distributed Multiplayer Game - Console-based multiplayer game',
      longDescription: 'Designed and developed a distributed multiplayer console game application using C++ with advanced system programming concepts and 95% accuracy rate.',
      image: 'assets/Images/gold-chase.jpg',
      technologies: ['C++', 'Vagrant', 'Sockets', 'Shared Memory', 'Signals', 'Pipes', 'System Programming'],
      category: 'System Programming',
      status: 'completed',
      features: [
        'Multiplayer console game',
        'Distributed architecture',
        'Error handling techniques',
        'Network connectivity',
        'Performance optimization'
      ],
      contributions: [
        'Designed and developed distributed multiplayer console game using C++',
        'Implemented error handling techniques on every system call with 95% accuracy',
        'Demonstrated problem-solving skills for game performance and network connectivity',
        'Used advanced system programming concepts (sockets, shared memory, signals, pipes)',
        'Ensured seamless user experience for players'
      ],
      impact: 'Achieved 95% accuracy rate with seamless multiplayer experience'
    }
  ];

  filteredProjects: Project[] = [];
  selectedCategory: string = 'all';
  categories: string[] = ['all', 'Full-Stack', 'Big Data', 'Database', 'Backend', 'AI/ML', 'System Programming'];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.filteredProjects = this.projects;
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.animateProjects();
    }
  }

  filterProjects(category: string): void {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === category);
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'completed': return '#00ff88';
      case 'in-progress': return '#ffa500';
      case 'planned': return '#ff6b6b';
      default: return '#00d9ff';
    }
  }

  getCategoryColor(category: string): string {
    switch (category) {
      case 'Full-Stack': return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
      case 'Big Data': return 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
      case 'Database': return 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
      case 'Backend': return 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)';
      case 'AI/ML': return 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)';
      case 'System Programming': return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
      default: return 'linear-gradient(135deg, #00d9ff 0%, #ff6b6b 100%)';
    }
  }

  private animateProjects(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card) => {
      observer.observe(card);
    });
  }
}
