import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  model: any = {};

  constructor(public auth: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  loggedIn() {
    return this.auth.loggedIn();
  }

  logout() {
    this.router.navigate(['/welcome']);
    localStorage.removeItem('token');
    this.alertify.message('logged out');

  }

  settings() {
    this.alertify.message('settings is under develop');
  }
}
