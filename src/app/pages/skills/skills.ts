import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollArrow } from '../../shared/scroll-arrow/scroll-arrow';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, ScrollArrow],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
   public skills = [
    { name: 'Angular', img: 'assets/icons/lang/angular.png'},
    { name: 'Typescript', img: 'assets/icons/lang/typescript.png'},
    { name: 'HTML', img: 'assets/icons/lang/html.png' },
    { name: 'CSS', img: 'assets/icons/lang/css.png' },
    { name: 'JavaScript', img: 'assets/icons/lang/javascript.png' },
    { name: 'Firebase', img: 'assets/icons/lang/firebase.png'},
    { name: 'Git', img: 'assets/icons/lang/git.png'},
    { name: 'Scrum', img: 'assets/icons/lang/scrum.png'},
    { name: 'Rest-API', img: 'assets/icons/lang/api.png'},
    { name: 'Material Design', img: 'assets/icons/lang/mdesign.png'}
  ];
}
