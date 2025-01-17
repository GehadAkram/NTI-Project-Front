import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";


export class PasswordValidators {
  static passwordStrength(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }

      const hasNumber = /[0-9]/.test(value);
      const hasUpper = /[A-Z]/.test(value);
      const hasLower = /[a-z]/.test(value);

      const validPassword = hasNumber && hasUpper && hasLower;

      return !validPassword ? { weakpassword: true } : null;
    }
  }

  static matchPassword(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.parent?.get('password')?.value;
      const retypedPassword = control.value;
      if (!retypedPassword) {
        return null;
      }

      if (password === retypedPassword) {
        return null;
      }
      else {
        return { mismatchpassword: true }
      }
    }
  }
}