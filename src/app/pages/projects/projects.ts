import { Component } from '@angular/core';
import { ProjectSection } from "./project-section/project-section";

@Component({
  selector: 'app-projects',
  imports: [ProjectSection],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  constructor() {
    // Initialization logic can go here
  }

}
