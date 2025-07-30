import { Component } from '@angular/core';
import { ProjectSection } from "./project-section/project-section";
import { ScrollArrow } from '../../shared/scroll-arrow/scroll-arrow';
@Component({
  selector: 'app-projects',
  imports: [ProjectSection, ScrollArrow],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  constructor() {
    // Initialization logic can go here
  }

}
