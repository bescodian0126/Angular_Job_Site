import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { SignupSelectRoleComponent } from '../../utils/auth/signup-select-role/signup-select-role.component';
import { SignupDataService } from '../../../services/signup-data.service';
import { LogoComponent } from '../../utils/logo/logo.component';
import { ChangeDetectorRef } from '@angular/core';
import { matchPassword } from '../../utils/auth/password-validator/matchPasswordValidator';
import { passwordStrengthValidator } from '../../utils/auth/password-validator/matchPasswordValidator';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  imports: [ReactiveFormsModule, SignupSelectRoleComponent, LogoComponent],
})
export class SignupComponent {
  public currentState: string = '';
  public flg: boolean = false;
  formBuilder: FormGroup;
  public errorState: any = {};
  signupStatus: string = '';

  constructor(
    private signupDataService: SignupDataService,
    private cdr: ChangeDetectorRef,
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.formBuilder = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.required, passwordStrengthValidator()]],
        passwordRepeat: ['', Validators.required],
      },
      { validators: matchPassword() }
    );

    this.formBuilder.statusChanges.subscribe(() => {
      this.updateErrorState();
    });
  }

  handleCurrentState() {
    this.currentState =
      this.currentState == 'freelancer' ? 'client' : 'freelancer';
  }

  updateErrorState() {
    this.errorState = {
      firstName: this.formBuilder.get('firstName')?.errors,
      lastName: this.formBuilder.get('lastName')?.errors,
      email: this.formBuilder.get('email')?.errors,
      password: this.formBuilder.get('password')?.errors,
      passwordRepeat: this.formBuilder.get('passwordRepeat')?.errors,
      form: this.formBuilder.errors,
    };
  }

  ngOnInit() {
    this.formBuilder.valueChanges.subscribe(() => {
      this.updateErrorState();
    });
    this.signupDataService.data$.subscribe((receivedData: string) => {
      this.currentState = receivedData;
      if (receivedData == 'freelancer' || receivedData == 'client')
        this.flg = true;
      else this.flg = false;
      this.cdr.detectChanges();
    });
  }

  onSignup() {
    if (this.formBuilder.valid) {
      const { email, password, firstName, lastName } = this.formBuilder.value; // Get values from the form
      console.log(email, password); // Log both
      console.log('Form submitted successfully');

      this.authService
        .signup(firstName, lastName, email, password, this.currentState)
        .subscribe(
          (response) => {
              console.log(response);
              this.router.navigate(['/signin']);
              this.signupStatus = 'success';
          },
          (error) => {
            console.error('Sign up Failed', error);
            this.signupStatus = 'error';
          }
        );
    } else {
      console.error('Form is invalid');
      this.signupStatus = 'error';
    }
  }
}
