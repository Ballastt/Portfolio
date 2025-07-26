import { Component } from '@angular/core';
import { ContactComponent } from '../../pages/contact/contact';
import { FooterSocialMedia } from '../footer-social-media/footer-social-media';

@Component({
  selector: 'app-footer',
  imports: [ContactComponent, FooterSocialMedia],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = new Date().getFullYear();
  
  
}
