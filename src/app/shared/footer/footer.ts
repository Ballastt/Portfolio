import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
   currentYear = new Date().getFullYear();
   isPrivacyHovered = false;
   isPrivacyChecked = false;
}
