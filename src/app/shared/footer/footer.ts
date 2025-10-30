import { Component, Input, Inject, LOCALE_ID} from '@angular/core';
import { ContactComponent } from '../../pages/contact/contact';
import { FooterSocialMedia } from '../footer-social-media/footer-social-media';
import { RouterModule, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ContactComponent, FooterSocialMedia, RouterModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  @Input() compact = false; // true for legal / privacy pages
  currentYear: number = new Date().getFullYear();
  currentLang: string = 'de';

  constructor(private router: Router, @Inject(LOCALE_ID) private locale: string) {
    // Use Angular's LOCALE_ID for reliable language detection
    this.currentLang = this.locale;
    console.log('Footer current language:', this.currentLang);
  }
}
