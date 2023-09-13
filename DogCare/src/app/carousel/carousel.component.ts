import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images = [
    { src: '../../assets/dogs1.png', alt: 'dog photography 1' },
    { src: '../../assets/dogs2.png', alt: 'dog photography 2' },
    { src: '../../assets/dogs3.png', alt: 'dog photography 3' },
    { src: '../../assets/dogs4.png', alt: 'dog photography 4' },
    { src: '../../assets/dogs5.png', alt: 'dog photography 5' }
  ];

  currentIndex = 0;

  constructor() {}

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
