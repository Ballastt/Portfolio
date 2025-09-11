import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterSocialMedia } from '../shared/footer-social-media/footer-social-media';

@Component({
  selector: 'app-menu-overlay',
  standalone: true,
  imports: [FooterSocialMedia, CommonModule],
  templateUrl: './menu-overlay.html',
  styleUrls: ['./menu-overlay.scss'],
})
export class MenuOverlay {
  // Track, welche Überschrift gerade gedrückt wird
  pressedHeadings: Record<string, boolean> = {};
  activeSection: string = '';
  navigateTo: string = '';

  @Input() isOverlay = true;
  @Output() close = new EventEmitter<void>();
  @Output() navigate = new EventEmitter<'about' | 'skills' | 'projects'>();

  onToggleBurger() {
    this.close.emit();
  }

  // Hilfsmethode, um gedrückt zu setzen
  setPressed(id: string, value: boolean) {
    this.pressedHeadings[id] = value;
  }

  goTo(section: 'about' | 'skills' | 'projects') {
    this.close.emit(); // Overlay schließen
    this.navigate.emit(section); // Home sagt dann: scroll dahin
  }
}
