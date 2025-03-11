import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  imageCoverPath = '/assets/images/bg-cover.png';
  imageProfilePath = '/assets/images/profile.png';
  aboutMeHeader = 'Full-Stack Developer | 4+ Years Experience';
  aboutMe =
    'I am a passionate Full-Stack Developer with 4+ years of experience in designing, developing, and deploying scalable web applications. I specialize in Angular for dynamic front-end development, utilizing Angular Material, Tailwind, and Bootstrap to create intuitive and responsive user interfaces.On the backend, I have expertise in Java, Spring Boot, and Spring Boot Microservices, enabling me to build robust, high-performance APIs and distributed systems. My experience in SQL ensures efficient database management and query optimization.I am well-versed in DevOps and CI/CD pipelines, leveraging Git, Jira, Docker, Jenkins, and Kubernetes to streamline development, deployment, and monitoring processes. I thrive in agile environments and am always eager to learn and implement new technologies to enhance software efficiency and user experience.';
}
