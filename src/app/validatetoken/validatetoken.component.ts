import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-validatetoken',
  templateUrl: './validatetoken.component.html',
  styleUrls: ['./validatetoken.component.css']
})
export class ValidatetokenComponent implements OnInit {
   
  validatetokenForm: FormGroup;

  constructor() { }

  ngOnInit(){
    this.validatetokenForm = new FormGroup (
      {
        email : new FormControl('',[Validators.required, Validators.email]),
        text : new FormControl('',[Validators.required, Validators.minLength(0)])
      }
    );
  }
 onValidatetoken(){

 }
}
