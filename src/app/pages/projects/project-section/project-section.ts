import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-section',
  imports: [CommonModule],
  templateUrl: './project-section.html',
  styleUrl: './project-section.scss',
})
export class ProjectSection {
  projects = [
    {
      id: '01/04',
      title: 'Join',
      imgSrc: 'assets/imgs/join_grey.png',
      imgAlt: 'Image of Join Project',
      tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and rop functions, assign users and categories',
      githubUrl: 'https://github.com/Ballastt/Join',
      reverseLayout: false
    }
  ];
}
