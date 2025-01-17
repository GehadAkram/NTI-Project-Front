import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from '../custom-validators/password.validator';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  ngOnInit(): void { 
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16), PasswordValidators.passwordStrength()]),
      confirmPassword: new FormControl('', [Validators.required, PasswordValidators.matchPassword]),
      address: new FormControl(''),
      phone: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('^[0-9]*$')]),
    });
  }

  signupForm!: FormGroup;

  signUp() {

  }
}
