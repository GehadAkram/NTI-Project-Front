import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-logic',
  standalone: false,
  
  templateUrl: './login-logic.component.html',
  styleUrl: './login-logic.component.css'
})
export class LoginLogicComponent {
  constructor(private _auth:AuthService, private _router: Router) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)])
  });
  
  login(form:FormGroup) {
    this._auth.login(form.value).subscribe({
      next: ()=>{
        this._router.navigate(['/profile'])
      },
      error: ()=> {console.log("error")}
    });
  }

  onSubmit(): void {
    this.login(this.loginForm);
  }

}
