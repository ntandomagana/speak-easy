import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    role: string = 'student';
    loginForm: FormGroup;
    showSuccessModal = false;
    isLoading = false;

    constructor(private fb: FormBuilder, 
      private router: Router
    ) {
      this.loginForm = this.fb.group({
         email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
     });

  }

  toggleRole(role: string): void {
    this.role = this.role === 'student' ? 'teacher' : 'student';
    this.loginForm.get('role')?.setValue(this.role); 
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true; 
      console.log(this.loginForm.value);

      setTimeout(() => {
        this.isLoading = false; 
        this.showSuccessModal = true; 
      }, 2000); 
    } else {
      console.log('Form is invalid');
    }
  }
}

  


