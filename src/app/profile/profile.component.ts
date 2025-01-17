import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from '../custom-validators/password.validator';

@Component({
  selector: 'app-profile',
  standalone: false,
  
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profileForm: FormGroup;

  userData = {
    name: 'Ahmed',
    email: 'ahmed@email.com',
    address: 'Cairo, Egypt',
    phone: '01117151375'
  }

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: [{ value: '', disabled: true }, [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16), PasswordValidators.passwordStrength]],
      newPassword: ['', PasswordValidators.passwordStrength],
      confirmPassword: ['', PasswordValidators.matchPassword],
      address: [''],
      phone: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[0-9]+$')]]
    }, { validator: this.passwordMatchValidator });

    this.profileForm.get('newPassword')!.valueChanges.subscribe(() => {
      const confirmPasswordControl = this.profileForm.get('confirmPassword');
      if (this.profileForm.get('newPassword')!.dirty) {
      confirmPasswordControl!.setValidators([Validators.required]);
      } else {
      confirmPasswordControl!.clearValidators();
      }
      confirmPasswordControl!.updateValueAndValidity();
    });
  }

  ngOnInit(): void {
    this.profileForm.patchValue(this.userData);
  }

  updateProfile(): void {
    if (this.profileForm.valid) {
      // Handle profile update logic
    }
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')!.value === form.get('confirmPassword')!.value ? null : { matched: true };
  }
}
