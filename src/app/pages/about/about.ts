import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',

})
export class AboutComponent {
  isClicked = false;

  scrollToContact() {
    this.isClicked = true;

    // Scrollen nach 300ms, um Animation sichtbar zu lassen
    setTimeout(() => {
      const contactSection = document.querySelector('.angled-footer');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }

      // Optional: Farbe zurücksetzen nach 1s
      setTimeout(() => {
        this.isClicked = false;
      }, 1000);
    }, 300);
  }
}
