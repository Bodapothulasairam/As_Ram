import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RouterModule, MatCardModule, MatIconModule, MatProgressBarModule, NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    {
      title: 'Core Technologies',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'C++', level: 80 },
        { name: 'Spring Boot', level: 95 },
        { name: 'Angular', level: 90 },
        { name: 'Microsoft Azure', level: 85 }
      ]
    },
    {
      title: 'Programming and Data Structures',
      skills: [
        { name: 'Algorithms', level: 92 },
        { name: 'Design Patterns', level: 90 },
        { name: 'Multithreading', level: 85 },
        { name: 'Event Handling', level: 88 },
        { name: 'Exception Handling', level: 95 }
      ]
    },
    {
      title: 'Cloud and DevOps',
      skills: [
        { name: 'Azure', level: 90 },
        { name: 'CI/CD', level: 90 },
        { name: 'DevOps practices', level: 90 }
      ]
    },
    {
      title: 'Frontend and Backend Frameworks',
      skills: [
        { name: 'Angular', level: 90 },
        { name: 'Spring Boot', level: 95 },
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'SQL', level: 78 }
      ]
    },
    {
      title: 'Certifications',
      skills: [
        { name: 'Oracle Java SE 8 Programmer Associate', level: 100 },
        { name: 'Microsoft Azure Administrator Associate', level: 100 },
        { name: 'DevOps Engineer Expert', level: 100 }
      ]
    }
  ];
}
