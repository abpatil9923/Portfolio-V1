import { CommonModule } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isDropdownOpen = false;
  isProfileOpen = false;
  isMobileViewOpen = false;
  selectedLanguage = 'English';

  tabs: any[] = [];

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit() {
    this.translate.onLangChange.subscribe(() => this.loadTabs());
  }

  loadTabs() {
    this.translate.get('navtabs').subscribe((translatedTabs) => {
      this.tabs = translatedTabs;
    });
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    const target = event.target as HTMLElement;
    if (
      !target.closest('#profile-menu') &&
      !target.closest('#profile-button-menu')
    ) {
      this.isProfileOpen = false;
    }

    if (
      !target.closest('#user-menu-button') &&
      !target.closest('#language-menu')
    ) {
      this.isDropdownOpen = false;
    }
  }

  selectLanguage(language: string) {
    if (language === 'English') {
      this.translate.use('en');
    } else if (language === 'Spanish') {
      this.translate.use('es');
    } else if (language === 'French') {
      this.translate.use('fr');
    }
    this.selectedLanguage = language;
    this.isDropdownOpen = false;
  }

  toggleUserMenu() {
    this.isProfileOpen = !this.isProfileOpen;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleMobileMenu() {
    this.isMobileViewOpen = !this.isMobileViewOpen;
  }

  activeTab = 'home';

  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
