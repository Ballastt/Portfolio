import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-overlay',
  standalone: true,
  imports: [],  
  templateUrl: './menu-overlay.html',
  styleUrls: ['./menu-overlay.scss'] 
})
export class MenuOverlay {
  activeSection = '';

}
