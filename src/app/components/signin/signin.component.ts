import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoComponent } from "../utils/logo/logo.component";

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, LogoComponent],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  title = 'Hello, Angular!';
  isShrink: boolean = false;
  formBuilder: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.formBuilder = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  shrinkButton(): void {
    this.isShrink = true;
  }

  restoreButton(): void {
    this.isShrink = false;
  }

  authenticateByGoogle() {
    alert('Authentication by Google');
  }

  onClick() {
    console.log('Button clicked');
  }

  onLogin() {
    if (this.formBuilder.valid) {
      const { email, password } = this.formBuilder.value; // Get values from the form
      console.log(email, password); // Log both
      console.log('Form submitted successfully');

      this.authService.login(email, password).subscribe(
        response => {
          console.log('Login successful: ', response);
        },
        error => {
          console.error('Login Failed', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
