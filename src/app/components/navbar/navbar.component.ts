import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isDropdownOpen = false;
  isProfileOpen = false;
  isMobileViewOpen = false;
  selectedLanguage = 'English';

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleProfile() {
    this.isProfileOpen = !this.isProfileOpen;
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    const target = event.target as HTMLElement;
    if (
      !target.closest('#user-menu-button') &&
      !target.closest('#dropdown-menu')
    ) {
      this.isDropdownOpen = false;
    }
  }

  // @HostListener('document:click', ['$event'])
  // closeProfile(event: Event) {
  //   const target = event.target as HTMLElement;
  //   if (!target.closest('#profile-open')) {
  //     this.isProfileOpen = false;
  //   }
  // }

  selectLanguage(language: string) {
    this.selectedLanguage = language;
    this.isDropdownOpen = false;
  }

  toggleMobileView() {
    this.isMobileViewOpen = !this.isMobileViewOpen;
  }
}
