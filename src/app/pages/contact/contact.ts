import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class ContactComponent {
  isPrivacyHovered = false;
  mailTest = false; // false = Formular soll abgeschickt werden

  http = inject(HttpClient);

  applyForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    message: new FormControl<string>('', [Validators.required, Validators.minLength(100)]),
    privacy: new FormControl<boolean>(false, [Validators.requiredTrue]),
  });

  // Use local sendMail.php when running on localhost to support Maildev testing
  post = {
    endPoint:
      window && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
        ? 'http://127.0.0.1/sendMail.php'
        : 'https://birgit-leitner.at/sendMail.php',
    options: {
      headers: { 'Content-Type': 'application/json' },
      responseType: 'text' as const,
    },
  };

  onSubmit() {
    if (this.applyForm.valid && !this.mailTest) {
      const payload = this.applyForm.value;
      this.http.post(this.post.endPoint, payload, this.post.options).subscribe({
        next: () => {
          this.applyForm.reset();
          alert('Formular erfolgreich abgeschickt!');
        },
        error: (err) => console.error('Fehler beim Absenden:', err),
      });
    } else {
      this.applyForm.markAllAsTouched();
      console.log('Formular ist ungültig');
    }
  }
}
