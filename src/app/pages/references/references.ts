import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollArrow } from "../../shared/scroll-arrow/scroll-arrow";

@Component({
  selector: 'app-references',
  imports: [CommonModule, ScrollArrow],
  templateUrl: './references.html',
  styleUrl: './references.scss'
})
export class References {
  references = [
    {
      imgSrc: 'assets/imgs/quote.png',
      imgAlt: 'Ein Bild von Anführungszeichen',
      name: 'V. Schuster',
      role: 'Team Kollege',
      text: 'Birgit hat dem Team mit ihren Organisationskills und ihrem Fokus geholfen. Wir wären ohne Sie nie so weit gekommen'
    },
    {
      imgSrc: 'assets/imgs/quote.png',
      name: 'V. Schuster',
      role: 'Team Kollege',
      text: 'Birgit hat dem Team mit ihren Organisationskills und ihrem Fokus geholfen. Wir wären ohne Sie nie so weit gekommen'
    },
    {
      imgSrc: 'assets/imgs/quote.png',
      name: 'V. Schuster',
      role: 'Team Kollege',
      text: 'Birgit hat dem Team mit ihren Organisationskills und ihrem Fokus geholfen. Wir wären ohne Sie nie so weit gekommen'
    }
  ];
}
