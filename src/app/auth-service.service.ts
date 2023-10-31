// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private logoutTimer!: ReturnType<typeof setTimeout>;

  constructor(private router: Router) { }

  startLogoutTimer(timeout: number) {
    this.logoutTimer = setTimeout(() => {
      this.logout();
    }, timeout);
  }

  resetLogoutTimer(timeout: number) {
    clearTimeout(this.logoutTimer); 
    this.startLogoutTimer(timeout); 
  }

  logout() {
    this.clearUserData();
    this.navigateToLoginPage();
  }
  private clearUserData() {
    localStorage.removeItem('authToken');
  }

  private navigateToLoginPage() {
    this.router.navigate(['/Login']);
  }
}
