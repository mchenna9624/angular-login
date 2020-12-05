import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm : FormGroup;
  constructor() { }

  ngOnInit(){
    this.registrationForm = new FormGroup(
      {
        firstName : new FormControl('',[Validators.required, Validators.minLength(0)]),
        lastName : new FormControl('',[Validators.required,Validators.minLength(0)]),
        Email : new FormControl('',[Validators.required, Validators.email]),
       Mnumber : new FormControl('',[Validators.required,Validators.minLength(10)]),
        Anumber : new FormControl('',[Validators.required, Validators.minLength(12)]),
     
         }
    );
  }
  registration() {
    console.log('if form is valid or not'+ this.registrationForm.valid);
    console.log('to validate user');
    if(this.registrationForm.valid){
      console.log(this.registrationForm.controls.firstName.value);
      console.log(this.registrationForm.controls.lastName.value);
      console.log(this.registrationForm.controls.Email.value);
      console.log(this.registrationForm.controls.Mnumber.value);
      console.log(this.registrationForm.controls.Anumber.value);
     }
  }
} 
