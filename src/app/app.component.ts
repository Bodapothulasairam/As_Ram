import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
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
    imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent,
      MatSidenavModule, MatButtonModule
    ]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  @ViewChild('drawer') drawer!: MatDrawer;
  constructor(private sideNavService: SharedServicesService) {}
  ngOnInit() {
    this.sideNavService.toggleSideNav$.subscribe(() => {
      this.drawer.toggle();
    });
  }
}
