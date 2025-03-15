import { Component } from '@angular/core';
import { MyservicesComponent } from './components/myservices/myservices.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    NavbarComponent,
    AboutComponent,
    MyservicesComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Atul Patil';

  activeTab = 'home';

  changeTab(tab: string) {
    this.activeTab = tab;
  }
}
