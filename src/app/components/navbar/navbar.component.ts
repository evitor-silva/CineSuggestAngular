import { Component, OnInit } from '@angular/core';
import { routes } from '../../routes/main';
import { Route, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  homeRoute = routes.find((r: Route) => r.path === '');
  signupRoute = routes.find((r: Route) => r.path === 'signup');

  constructor() { }

  ngOnInit(): void {
  }
}
