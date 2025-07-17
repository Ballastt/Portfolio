import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  activeLang: string = 'de';

  setLang(lang: string) {
    this.activeLang = lang;
  }

  toggleBurger(){}
 
}
