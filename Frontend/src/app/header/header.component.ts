import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-header',

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  isSearchOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isSearchOpen = false;
  }

  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
    this.isMenuOpen = false;
  }
}
