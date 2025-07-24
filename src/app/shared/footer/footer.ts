import { Component } from '@angular/core';
import { ContactComponent } from '../../pages/contact/contact';

@Component({
  selector: 'app-footer',
  imports: [ContactComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = new Date().getFullYear();
  
  
}
