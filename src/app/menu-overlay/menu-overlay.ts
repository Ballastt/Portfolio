import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FooterSocialMedia } from '../shared/footer-social-media/footer-social-media';
import { Header } from '../shared/header/header';

@Component({
  selector: 'app-menu-overlay',
  standalone: true,
  imports: [FooterSocialMedia, Header],
  templateUrl: './menu-overlay.html',
  styleUrls: ['./menu-overlay.scss'],
})
export class MenuOverlay {
  activeSection: string = '';
  navigateTo: string = '';
  @Input() isOverlay = false; // von außen gesetzt
  @Output() close = new EventEmitter<void>(); // Schließen-Signal

  onToggleBurger() {
    this.close.emit(); // nach außen weitergeben
  }

  navigate(sectionId: string): void {
    this.activeSection = sectionId;
    const el = document.getElementById(sectionId.toLowerCase());

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      this.close.emit();
    }
  }
}
