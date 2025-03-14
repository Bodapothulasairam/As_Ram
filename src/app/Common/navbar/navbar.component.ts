import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedServicesService } from '../../shared-services.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  showImage: boolean = false;
  constructor(private sideNavService: SharedServicesService) { }
  public toggleNav(){
    const sideNav = document.getElementById('sideNav') as HTMLElement;
    if (sideNav) {
      sideNav.classList.toggle('active');
      this.showImage = !this.showImage;
    }
  }
}
