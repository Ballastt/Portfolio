import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  isPrivacyHovered = false;
  isPrivacyChecked = false;

  applyForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(100),
    ]),
    privacy: new FormControl(false, [Validators.requiredTrue]),
  });

  onSubmit() {
    if (this.applyForm.valid) {
      console.log(this.applyForm.value);
      // Here you can handle the form submission, e.g., send data to a server
    } else {
      this.applyForm.markAllAsTouched();
      console.log('Form is invalid');
    }
  }
}