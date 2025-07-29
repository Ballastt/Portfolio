import { AfterViewInit, Component, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-scroll-arrow',
  standalone: true,
  imports: [],
  templateUrl: './scroll-arrow.html',
  styleUrl: './scroll-arrow.scss',
})
export class ScrollArrow implements AfterViewInit {
  @Input() arrowPrefix = 'arrow-right'; // z.B. 'arrow-left'

  @ViewChild('arrowRef') arrowRef!: ElementRef;

  currentFrame = 1;
  private observer!: IntersectionObserver;
  private hasAnimated = false;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        console.log('IntersectionObserver:', entry.isIntersecting);
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.animateArrow();
        } else if (!entry.isIntersecting) {
          this.resetArrow(); // wenn weggescrollt wird, zurücksetzen
        }
      },
      {
        threshold: 0.3,
      }
    );

    this.observer.observe(this.arrowRef.nativeElement);
  }

  animateArrow() {
    const frames = [1, 2, 3];
    let i = 0;

    const animate = () => {
      if (i < frames.length) {
        this.currentFrame = frames[i];
        i++;
        setTimeout(animate, 420);
      }
    };

    animate();
  }

  resetArrow() {
    this.currentFrame = 1;
    this.hasAnimated = false;
  }
}
