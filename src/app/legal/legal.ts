import { Component, OnInit } from '@angular/core';
import { Footer } from '../shared/footer/footer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [Footer],
  templateUrl: './legal.html',
  styleUrl: './legal.scss',
})
export class Legal implements OnInit {
  pageType: string = 'datenschutz'; // default to privacy policy

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the current route path
    const routePath = this.route.snapshot.routeConfig?.path;
    console.log('Route path:', routePath);

    if (routePath === 'impressum') {
      this.pageType = 'impressum';
    } else {
      this.pageType = 'datenschutz';
    }

    console.log('Legal pageType set to:', this.pageType);
  }
}
