import { Component } from '@angular/core';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-orderonline',
  templateUrl: './orderonline.component.html',
  styleUrls: ['./orderonline.component.css']
})
export class OrderonlineComponent {
  
  menu: any[] = [];
  menuItems: any[] = [];
  itemsPerPage: number = 5;
  currentPage: number = 1;

  ngOnInit() {
    this.menu = [
      { name: 'Pizza', description: 'Description 1', image: 'assets/cheezyPizza.jpeg' },
      { name: 'hamburger', description: 'Description 2', image: 'assets/hamburger cheeze.jpeg' },
      { name: 'Chicken Leg Curry', description: 'Description 3', image: 'assets/567731276e510a6f3a7598c3_22.jpeg' },
      { name: 'mutton-curry', description: 'Description 4', image: 'assets/6tkrhcsg_mutton-curry_625x300_10_February_21.webp' },
      { name: 'biriyani', description: 'Description 5', image: 'assets/biriyani.jpeg' },
      { name: 'Chicken Manchuri', description: 'Description 6', image: 'assets/kerala-beef_625x350_51469430608.webp' },
      { name: 'Benne Dosa(DVG)', description: 'Description 7', image: 'assets/BD.jpeg' },
      { name: 'North-Indian-Thali', description: 'Description 8', image: 'assets/How-to-Make-North-Indian-Thali-Vegetarian-7.webp' },
      { name: 'Egg Biriyani', description: 'Description 9', image: 'assets/enhanced.jpeg' }
    ];
    this.loadItems();
  }

  loadItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const itemsToAdd = this.menu.slice(startIndex, endIndex);
    this.menuItems = [...this.menuItems, ...itemsToAdd];
    this.currentPage++;
  }

  loadMoreItems() {
    this.loadItems();
  }

  @HostListener('window:scroll', ['$event'])
  onscroll(event: Event): void {
    if (
      this.menuItems.length < this.menu.length &&
      (window.innerHeight + window.scrollY) >= document.body.offsetHeight
    ) {
      this.loadMoreItems();
    }
  }
}
