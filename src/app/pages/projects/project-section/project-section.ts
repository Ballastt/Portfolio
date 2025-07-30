import {
  Component,
  ViewChildren,
  ElementRef,
  AfterViewInit,
  QueryList,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-section',
  imports: [CommonModule],
  templateUrl: './project-section.html',
  styleUrl: './project-section.scss',
})
export class ProjectSection implements AfterViewInit {
  constructor(private cdr: ChangeDetectorRef) {}
  @ViewChildren('projectRef') projectRefs!: QueryList<ElementRef>;

  inViewStates: boolean[] = [];

  projects = [
    {
      id: '01/04',
      title: 'Join',
      imgSrc: 'assets/imgs/join_grey.png',
      imgAlt: 'Screenshot of Join Project',
      tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      description:
        'Aufgabenmanager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben per Drag-and-Drop, weise Benutzer und Kategorien zu.',
      githubUrl: 'https://github.com/Ballastt/Join',
      reverseLayout: false,
    },
    {
      id: '02/04',
      title: 'El Pollo Loco',
      imgSrc: 'assets/imgs/elpollo_loco.png',
      imgAlt: 'Screenshot of the jump-n-run Game El Pollo Loco',
      tech: ['HTML', 'CSS', 'JavaScript'],
      description:
        'Ein simples Jump-and-Run Spiel basierend auf dem Paradigma der Objektorientierung. Hilf Pepe Münzen und Tabasco-Flaschen ein zu sammeln um seine Gegner zu besiegen',
      githubUrl: 'https://github.com/Ballastt/El-pollo-loco',
      reverseLayout: true,
    },
    {
      id: '03/04',
      title: 'DABubble',
      imgSrc: 'assets/imgs/DAbubble.png',
      imgAlt: 'Screenshot of DABubble-Website',
      tech: ['Firebase', 'Angular', 'TypeScript'],
      description:
        'Diese App ist ein Slack-Klon. Die App revolutioniert Team-Kommunikation und Zusammenarbeit mit ihrem intuitivem Interface, Nachrichtenaustausch in Real-Time und robuster Channel Organisation.',
      githubUrl: ' ',
      reverseLayout: false,
    },
    {
      id: '04/04',
      title: 'Pokédex',
      imgSrc: 'assets/imgs/pokedex.png',
      imgAlt: 'Screenshot of Pokemon-Website',
      tech: ['HTML', 'CSS', 'JavaScript', 'API'],
      description:
        'Eine simple Bibliothek, die auf der PokéAPI basiert. Stellt Pokemon Informationen zur Verfügung und katalogisiert diese.',
      githubUrl: 'https://github.com/Ballastt/Join',
      reverseLayout: true,
    },
  ];

  ngAfterViewInit() {
    this.inViewStates = Array(this.projects.length).fill(false);

    this.projectRefs.forEach((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          this.inViewStates[index] = entry.isIntersecting;
          // Wenn du eine Animation triggern willst, kannst du auch hier detectChanges aufrufen:
          this.cdr.detectChanges();
        },
        { threshold: 0.5 }
      );

      observer.observe(ref.nativeElement);
    });

    // Wichtig: initial nach Setup aufrufen
    this.cdr.detectChanges();
  }
}
