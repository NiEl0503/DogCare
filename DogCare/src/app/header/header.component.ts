import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit() {
    const hamburger = document.getElementById('hamburger') as HTMLElement;
    const itemsMenu = document.querySelector('.header-nav ul') as HTMLElement;

    hamburger.addEventListener('click', () => {
      itemsMenu.classList.toggle('show');
    });
  }
}
