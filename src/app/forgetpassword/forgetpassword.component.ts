import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  forgetpasswordForm: FormGroup;

  constructor() { }

  ngOnInit(){
    this.forgetpasswordForm = new FormGroup (
      {
        email : new FormControl('',[Validators.required, Validators.email]),
      }
    );
  }
 onForgetpassword(){

 }
}
