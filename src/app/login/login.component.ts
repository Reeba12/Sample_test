import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  submitted:boolean= false
  
  emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  reactiveForm =new FormGroup({
    email : new FormControl("", [Validators.required, Validators.maxLength(32), Validators.pattern(this.emailRegex)]),

    password : new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8)]),
  })
    constructor(private formbuilder:FormBuilder) { 
  }
  getControl(name: any) : AbstractControl | null {
    return this.reactiveForm.get(name)
  }
  // get name() { return this.reactiveForm.controls; }
  onSubmit(){
    console.log(this.reactiveForm.value)
  }
  ngOnInit(): void {

  
  }
}
