import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule, MatButtonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor() {}
  greetingText: string = "Hi, Myself";
  Name: string = "Sairam Bodapothula";
  designation: string = "And I'm a Full-stack Developer";
  overview = "Experienced Software Engineer with 5+ years of expertise in the Software Development Life Cycle, from design to deployment. Certified in Oracle Java SE 8, Microsoft Azure, and DevOps, skilled in Java, C++, Spring Boot, and Angular. Proficient in creating scalable cloud solutions, microservices, and CI/CD pipelines, with a focus on performance and security. Collaborative team player with strong problem-solving skills and experience mentoring junior developers."
  openSocial(socialmedia: any) {
    if (socialmedia == "Linkedin") {
      window.open('https://www.linkedin.com/in/sairam-bodapothula/', '_blank');
    }
    else if (socialmedia == "Github") {
      window.open('https://github.com/Bodapothulasairam', '_blank');
    }
    else if(socialmedia == "Instagram")
    {
      window.open('https://www.instagram.com/sairamchowdary687/', '_blank');
    }
  }
}
