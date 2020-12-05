import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide: boolean = true;
  constructor() { }

  ngOnInit(){
    this.loginForm = new FormGroup(
      {
        email : new FormControl('',[Validators.required, Validators.email]),
        password : new FormControl('',[Validators.required,Validators.minLength(6)])
      }
    ); 
  }

  onLogin() {
     console.log('if form is valid or not'+ this.loginForm.valid);
     console.log('to validate user');
     if(this.loginForm.valid){
       console.log(this.loginForm.controls.email.value);
       console.log(this.loginForm.controls.password.value);
      }
   }
}
