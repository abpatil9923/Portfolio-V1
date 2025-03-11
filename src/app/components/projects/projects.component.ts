import { Component } from '@angular/core';
import { Project } from '../../model/project.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Shangrila Petition Platform',
      description: 'A fully Functional MERN Stack Web Application...',
      stack: ['React.js', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'CSS'],
      imageUrl: '/assets/images/demo-site.jpg',
      visitLink: '#',
      githubLink: '#',
    },
    {
      title: 'The Kolorado Paints',
      description: 'A fully Functional Next.js Based Frontend...',
      stack: ['Next.js', 'CSS3', 'React.js', 'MUI', 'SEO'],
      imageUrl: '/assets/images/demo-site.jpg',
      visitLink: '#',
      githubLink: '#',
    },
    {
      title: 'Shangrila Petition Platform',
      description: 'A fully Functional MERN Stack Web Application...',
      stack: ['React.js', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'CSS'],
      imageUrl: '/assets/images/demo-site.jpg',
      visitLink: '#',
      githubLink: '#',
    },
    {
      title: 'The Kolorado Paints',
      description: 'A fully Functional Next.js Based Frontend...',
      stack: ['Next.js', 'CSS3', 'React.js', 'MUI', 'SEO'],
      imageUrl: '/assets/images/demo-site.jpg',
      visitLink: '#',
      githubLink: '#',
    },
    {
      title: 'Shangrila Petition Platform',
      description: 'A fully Functional MERN Stack Web Application...',
      stack: ['React.js', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'CSS'],
      imageUrl: '/assets/images/demo-site.jpg',
      visitLink: '#',
      githubLink: '#',
    },
    {
      title: 'The Kolorado Paints',
      description: 'A fully Functional Next.js Based Frontend...',
      stack: ['Next.js', 'CSS3', 'React.js', 'MUI', 'SEO'],
      imageUrl: '/assets/images/demo-site.jpg',
      visitLink: '#',
      githubLink: '#',
    },
  ];
}
