import { Component } from '@angular/core';
import { FooterSocialMedia } from '../../footer-social-media/footer-social-media';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-legal-mobile',
  imports: [FooterSocialMedia, RouterLink],
  templateUrl: './footer-legal-mobile.html',
  styleUrl: './footer-legal-mobile.scss'
})
export class FooterLegalMobile {

}
