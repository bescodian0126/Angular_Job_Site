import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  imports: [ReactiveFormsModule]
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ){
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSignup(){
    if(this.signupForm.valid){
      this.authService.signup(this.signupForm.value).subscribe({
        next: (response) => {
          console.log('Signup Successful', response);
          this.router.navigate(['/signin']);   // Redirect to signin page after successful signup
        },
        error: (error) => {
          console.error('Signup Failed', error);
        }
      })
    }
  }
}
