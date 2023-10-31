import { AuthService } from './auth-service.service';
import { Component } from '@angular/core';
import {  HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.startLogoutTimer(30000);}

  @HostListener('document:mousemove')
  onUserActivity() {
    this.authService.resetLogoutTimer(30000); 
  }
}
