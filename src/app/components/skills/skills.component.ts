import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills = [
    { name: 'HTML', icon: '/assets/icons/html.png' },
    { name: 'CSS', icon: '/assets/icons/css.png' },
    { name: 'Angular', icon: '/assets/icons/angular.png' },
    { name: 'React', icon: '/assets/icons/react.png' },
    { name: 'JavaScript', icon: '/assets/icons/javascript.png' },
    { name: 'Tailwind', icon: '/assets/icons/tailwind.png' },
    { name: 'Java', icon: '/assets/icons/java.png' },
    { name: 'API', icon: '/assets/icons/api.png' },
    { name: 'Spring Boot', icon: '/assets/icons/spring-boot.png' },
    { name: 'Spring Cloud', icon: '/assets/icons/spring-cloud.png' },
    { name: 'Spring Security', icon: '/assets/icons/spring-security.png' },
    { name: 'JWT', icon: '/assets/icons/jwt.png' },
    { name: 'Maven', icon: '/assets/icons/maven.png' },
    { name: 'Gradle', icon: '/assets/icons/gradle.png' },
    { name: 'Database', icon: '/assets/icons/database.png' },
    { name: 'Git', icon: '/assets/icons/git.png' },
    { name: 'GitHub', icon: '/assets/icons/github.png' },
    { name: 'Jira', icon: '/assets/icons/jira.png' },
    { name: 'Docker', icon: '/assets/icons/docker.png' },
    { name: 'Jenkins', icon: '/assets/icons/jenkins.png' },
    { name: 'Kubernetes', icon: '/assets/icons/kubernetes.png' },
  ];
}
