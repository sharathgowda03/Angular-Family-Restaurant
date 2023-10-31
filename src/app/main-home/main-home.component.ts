import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit{
  images: string[] = [
    '../../assets/Untitled-2020-09-09T182308.697.jpg',
    '../../assets/delicious-indian.jpeg',
    '../../assets/roasted-pickled-cauliflowers-sandwiches-romesco_0_0_0-9cce7c8e663749c9929e93fb15077670.jpg',
  ];
  currentImageIndex: number = 0;
  ngOnInit() {
    setInterval(() => {
      this.changeBackgroundImage();
    }, 3000);
  }
  changeBackgroundImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    const backgroundImage = `url('${this.images[this.currentImageIndex]}')`;
    const heroElement = document.querySelector('.hero') as HTMLElement;
  
    if (heroElement) {
      heroElement.style.backgroundImage = backgroundImage;
    }
  }

}
