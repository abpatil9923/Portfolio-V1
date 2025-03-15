import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-myservices',
  imports: [CommonModule, TranslateModule],
  templateUrl: './myservices.component.html',
  styleUrl: './myservices.component.scss',
})
export class MyservicesComponent {
  services: any[] = [];

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit() {
    this.translate.onLangChange.subscribe(() => this.loadServices());
  }

  loadServices() {
    this.translate.get('services').subscribe((translatedServices) => {
      this.services = translatedServices;
    });
  }
}
