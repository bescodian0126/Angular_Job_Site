import { AbstractControl, ValidatorFn} from '@angular/forms';

export function matchPassword(): ValidatorFn{
  return (control: AbstractControl): {[key: string]: boolean} | null => {
    const password = control.get('password');
    const passwordRepeat = control.get('passwordRepeat');

    if(password && passwordRepeat && password.value !== passwordRepeat.value){
      return { passwordsDoNotMatch: true};
    }
    return null;
  }
}

export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const password = control.value;

    // Regular expressions for validation
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Check if password meets the criteria
    if (password && (!hasUpperCase || !hasSpecialChar)) {
      return { passwordStrength: true }; // Return an error if criteria are not met
    }
    return null; // Return null if validation passed
  };
}


