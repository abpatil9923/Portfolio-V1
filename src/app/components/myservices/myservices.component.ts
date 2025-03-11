import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-myservices',
  imports: [CommonModule],
  templateUrl: './myservices.component.html',
  styleUrl: './myservices.component.scss',
})
export class MyservicesComponent {
  services = [
    {
      title: 'Website Development & UI/UX',
      description:
        'Proficient in developing dynamic and responsive user interfaces using modern JavaScript frameworks and libraries.',
      icon: 'devices',
    },
    {
      title: 'Backend Development',
      description:
        'Experienced in designing and implementing robust backend systems, REST APIs, and microservices architectures.',
      icon: 'api',
    },
    {
      title: 'Database Management',
      description:
        'Skilled in relational and NoSQL databases, ensuring efficient data storage, optimization, and high availability.',
      icon: 'database',
    },
    {
      title: 'DevOps Services',
      description:
        'Hands-on experience in cloud deployment including CI/CD pipelines (Jenkins, GitHub Actions, GitLab CI/CD), containerization (Docker, Kubernetes).',
      icon: 'deployed_code',
    },
  ];
}
