import { Component } from '@angular/core';

@Component({
  selector: 'app-success-message-dialog-component',
  templateUrl: './success-message-dialog-component.component.html',
  styleUrls: ['./success-message-dialog-component.component.css']
})
export class SuccessMessageDialogComponentComponent {
  successMessage = 'Sign-up successful, please login with your credentials';
}
