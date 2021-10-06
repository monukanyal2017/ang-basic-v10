import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api-service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() sidenavToggle = new EventEmitter<void>();
  isLoggedIn : Observable<boolean>;
  isAuth: boolean = false;

  constructor(public apiService: ApiService) {
   this.isLoggedIn =  this.apiService.isLoggedIn()
   this.isLoggedIn.subscribe((res)=> { this.isAuth = res})
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.apiService.logout();
  }
}
