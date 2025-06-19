import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, OnDestroy {
images: string[] = [
    '../../assets/dosa.jpg',
    '../../assets/idli.jpg',
    '../../assets/download.jpg'
  ];
  currentIndex: number = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startSlideshow();
  }

  startSlideshow(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000); // Change slide every 3 seconds
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Clear interval on component destroy
    }
  }
}
