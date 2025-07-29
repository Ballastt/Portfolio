import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FooterSocialMedia } from '../shared/footer-social-media/footer-social-media';


@Component({
  selector: 'app-menu-overlay',
  standalone: true,
  imports: [FooterSocialMedia],
  templateUrl: './menu-overlay.html',
  styleUrls: ['./menu-overlay.scss'],
})
export class MenuOverlay {
  activeSection: string = '';
  navigateTo: string = '';
  @Input() isOverlay = true; 
  @Output() close = new EventEmitter<void>(); 

  onToggleBurger() {
    this.close.emit(); 
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
