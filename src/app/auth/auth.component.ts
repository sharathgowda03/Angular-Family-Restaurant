import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  timerValue: number = 10;
  timerInterval: any;
  constructor(private router:Router){}
 
  @HostListener('document:mousemove', ['$event'])
  @HostListener('document:keydown', ['$event'])
  onActivity(event: Event) {
    this.resetTimer();
    this.startTimer();
  }
 
  startTimer() {
    this.timerInterval = setInterval(() => {
      if (this.timerValue > 0) {
        this.timerValue--;
      } else {
        clearInterval(this.timerInterval);
        this.router.navigate(['/Login']);
      }
    }, 1000);
  }
  resetTimer() {
    clearInterval(this.timerInterval);
    this.timerValue = 50;
  }
}
