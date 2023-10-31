import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-sucess-page',
  templateUrl: './contact-sucess-page.component.html',
  styleUrls: ['./contact-sucess-page.component.css']
})
export class ContactSucessPageComponent {
  showPopup() {
    const popup = document.getElementById("popup");
    if (popup) {
        popup.style.display = "block";
    }
}

 closePopup() {
    const popup = document.getElementById("popup");
    if (popup) {
        popup.style.display = "none";
    }
}


showPopupButton: HTMLElement | null;
  constructor() {
    this.showPopupButton = null;
  }
  ngOnInit() {
    this.showPopupButton = document.getElementById("showPopupButton");
    if (this.showPopupButton) {
      this.showPopupButton.addEventListener("click", this.showPopup.bind(this));
    }
}
}
