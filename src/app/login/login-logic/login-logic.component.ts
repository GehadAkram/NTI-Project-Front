import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-logic',
  standalone: false,
  
  templateUrl: './login-logic.component.html',
  styleUrl: './login-logic.component.css'
})
export class LoginLogicComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)])
  });

  onSubmit(): void {
    console.log(this.loginForm.value);
  }

}
