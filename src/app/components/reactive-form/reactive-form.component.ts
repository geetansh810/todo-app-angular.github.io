import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordChecker } from 'src/app/custom-validators/password-checker';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  registerForm: FormGroup;
  submitted: boolean = false;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    },{
      validators: PasswordChecker('password','confirmPassword')
    });
  }

  get h(){
    return this.registerForm.controls ;
  }

  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }

    console.table(this.registerForm.value);
    console.table(this.registerForm);
    alert("SignUp is successful" + JSON.stringify(this.registerForm.value))

  }

  onReset(){
    this.submitted = false;
    this.registerForm.reset();
  }

}

