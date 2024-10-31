import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from "../Common/navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatButtonModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor() {
  }
  
}
