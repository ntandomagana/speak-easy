import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  isLoading = false;



  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.signupForm =  this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      

    });
  
  }

  ngOnInit(): void {
  }
   
  onSubmit(){
    if (this.signupForm.valid) {
      alert('Yoou successfully signed up!')
    }
  }


}
