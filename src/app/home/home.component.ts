import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule,MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  greetingText: string="Hi, Myself";
  Name: string = "Sairam Bodapothula";
  designation: string = "And I'm a Full-stack Developer";
  overview="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde dolores molestiae quis nisi animi aliquam quia possimus quaerat. Obcaecati modi sequi voluptate dignissimos suscipit, voluptas dolorem totam aut minus aliquam! Quae asperiores corporis magni perferendis."
  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;
  constructor() {
  }
}