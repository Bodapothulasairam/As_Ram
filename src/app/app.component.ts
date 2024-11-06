import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Common/navbar/navbar.component";
import { FooterComponent } from "./Common/footer/footer.component";
import { MatButtonModule } from '@angular/material/button';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';
import { SharedServicesService } from './shared-services.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent,MatSidenavModule, MatButtonModule, RouterModule]
})
export class AppComponent {
  constructor(private sideNavService: SharedServicesService) {}
  ngOnInit() {
  }
}
