import { Component, Inject, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-references',
  imports: [CommonModule],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  constructor(@Inject(LOCALE_ID) private locale: string) {}

  references = [
    {
      name: 'V. Schuster',
      nameKey: 'ref1.name',
      role: 'Team Kollege',
      roleKey: 'ref1.role',
      text: 'Birgit hat dem Team mit ihren Organisationskills und ihrem Fokus geholfen. Wir wären ohne Sie nie so weit gekommen',
      textKey: 'ref1.text',
    },
    {
      name: 'V. Schuster',
      nameKey: 'ref2.name', 
      role: 'Team Kollege',
      roleKey: 'ref2.role',
      text: 'Birgit hat dem Team mit ihren Organisationskills und ihrem Fokus geholfen. Wir wären ohne Sie nie so weit gekommen',
      textKey: 'ref2.text',
    },
    {
      name: 'V. Schuster',
      nameKey: 'ref3.name',
      role: 'Team Kollege', 
      roleKey: 'ref3.role',
      text: 'Birgit hat dem Team mit ihren Organisationskills und ihrem Fokus geholfen. Wir wären ohne Sie nie so weit gekommen',
      textKey: 'ref3.text',
    },
  ];

  getTranslatedName(reference: any): string {
    if (this.locale === 'en') {
      const translations: { [key: string]: string } = {
        'ref1.name': 'V. Schuster',
        'ref2.name': 'V. Schuster', 
        'ref3.name': 'V. Schuster'
      };
      return translations[reference.nameKey] || reference.name;
    }
    return reference.name;
  }

  getTranslatedRole(reference: any): string {
    if (this.locale === 'en') {
      const translations: { [key: string]: string } = {
        'ref1.role': 'Team Colleague',
        'ref2.role': 'Team Colleague',
        'ref3.role': 'Team Colleague'
      };
      return translations[reference.roleKey] || reference.role;
    }
    return reference.role;
  }

  getTranslatedText(reference: any): string {
    if (this.locale === 'en') {
      const translations: { [key: string]: string } = {
        'ref1.text': 'Birgit helped the team with her organizational skills and focus. We would never have come this far without her.',
        'ref2.text': 'Birgit helped the team with her organizational skills and focus. We would never have come this far without her.',
        'ref3.text': 'Birgit helped the team with her organizational skills and focus. We would never have come this far without her.'
      };
      return translations[reference.textKey] || reference.text;
    }
    return reference.text;
  }
}
