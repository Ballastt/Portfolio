import {
  Component,
  ViewChildren,
  ElementRef,
  AfterViewInit,
  QueryList,
  ChangeDetectorRef,
  Inject,
  LOCALE_ID,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-section',
  imports: [CommonModule],
  templateUrl: './project-section.html',
  styleUrl: './project-section.scss',
})
export class ProjectSection implements AfterViewInit {
  constructor(private cdr: ChangeDetectorRef, @Inject(LOCALE_ID) private locale: string) {}
  @ViewChildren('projectRef') projectRefs!: QueryList<ElementRef>;

  inViewStates: boolean[] = [];

  projects = [
    {
      id: '01/04',
      title: 'Join',
      titleKey: 'join.title',
      imgSrc: 'assets/imgs/join_grey.png',
      imgAlt: 'Screenshot of Join Project',
      imgAltKey: 'join.imgAlt',
      tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      description:
        'Aufgabenmanager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben per Drag-and-Drop, weise Benutzer und Kategorien zu.',
      descriptionKey: 'join.description',
      githubUrl: 'https://github.com/Ballastt/Join',
      reverseLayout: false,
    },
    {
      id: '02/04',
      title: 'El Pollo Loco',
      titleKey: 'elpollo.title',
      imgSrc: 'assets/imgs/elpollo_loco.png',
      imgAlt: 'Screenshot of the jump-n-run Game El Pollo Loco',
      imgAltKey: 'elpollo.imgAlt',
      tech: ['HTML', 'CSS', 'JavaScript'],
      description:
        'Ein simples Jump-and-Run Spiel basierend auf dem Paradigma der Objektorientierung. Hilf Pepe Münzen und Tabasco-Flaschen ein zu sammeln um seine Gegner zu besiegen',
      descriptionKey: 'elpollo.description',
      githubUrl: 'https://github.com/Ballastt/El-pollo-loco',
      reverseLayout: true,
    },
    {
      id: '03/04',
      title: 'DABubble',
      titleKey: 'dabubble.title',
      imgSrc: 'assets/imgs/DAbubble.png',
      imgAlt: 'Screenshot of DABubble-Website',
      imgAltKey: 'dabubble.imgAlt',
      tech: ['Firebase', 'Angular', 'TypeScript'],
      description:
        'Diese App ist ein Slack-Klon. Die App revolutioniert Team-Kommunikation und Zusammenarbeit mit ihrem intuitivem Interface, Nachrichtenaustausch in Real-Time und robuster Channel Organisation.',
      descriptionKey: 'dabubble.description',
      githubUrl: ' ',
      reverseLayout: false,
    },
    {
      id: '04/04',
      title: 'Pokédex',
      titleKey: 'pokedex.title',
      imgSrc: 'assets/imgs/pokedex.png',
      imgAlt: 'Screenshot of Pokemon-Website',
      imgAltKey: 'pokedex.imgAlt',
      tech: ['HTML', 'CSS', 'JavaScript', 'API'],
      description:
        'Eine simple Bibliothek, die auf der PokéAPI basiert. Stellt Pokemon Informationen zur Verfügung und katalogisiert diese.',
      descriptionKey: 'pokedex.description',
      githubUrl: 'https://github.com/Ballastt/Project-Pokedex-with-API',
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

  getTranslatedTitle(project: any): string {
    if (this.locale === 'en') {
      const translations: { [key: string]: string } = {
        'join.title': 'Join',
        'elpollo.title': 'El Pollo Loco',
        'dabubble.title': 'DABubble',
        'pokedex.title': 'Pokédex'
      };
      return translations[project.titleKey] || project.title;
    }
    return project.title;
  }

  getTranslatedDescription(project: any): string {
    if (this.locale === 'en') {
      const translations: { [key: string]: string } = {
        'join.description': 'Task manager inspired by the Kanban system. Create and organize tasks with drag-and-drop, assign users and categories.',
        'elpollo.description': 'A simple jump-and-run game based on object-oriented programming paradigm. Help Pepe collect coins and Tabasco bottles to defeat his enemies.',
        'dabubble.description': 'This app is a Slack clone. The app revolutionizes team communication and collaboration with its intuitive interface, real-time messaging and robust channel organization.',
        'pokedex.description': 'A simple library based on the PokéAPI. Provides and catalogs Pokemon information.'
      };
      return translations[project.descriptionKey] || project.description;
    }
    return project.description;
  }
}
