import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {

  constructor() { }
  private toggleSideNavSubject = new Subject<void>();
  toggleSideNav$ = this.toggleSideNavSubject.asObservable();

  toggleSideNav() {
    this.toggleSideNavSubject.next();
  }
}
