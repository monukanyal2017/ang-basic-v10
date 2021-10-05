import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
//import { Subscription } from 'rxjs/Subscription';

//import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth = false;  //BYDEFAULT
  //authSubscription: Subscription;

  //constructor(private authService: AuthService) { }
  constructor() { }

  ngOnInit() {
    // this.authSubscription = this.authService.authChange.subscribe(authStatus => {
    //   this.isAuth = authStatus;
    // });
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    //this.authService.logout();
  }

  ngOnDestroy() {
    // this.authSubscription.unsubscribe();
  }

}