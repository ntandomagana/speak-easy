import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isLoading = false;
  showSuccessModal = false; 
  signupForm: FormGroup;
  role: string = 'student';

  constructor(private fb: FormBuilder, private router: Router) { 

    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: [this.role, Validators.required], 
    });
  }

  toggleRole(role: string): void {
    this.role = role;
    this.signupForm.get('role')?.setValue(role);  
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.signupForm.valid) {
      this.isLoading = true; 
      console.log(this.signupForm.value);

      setTimeout(() => {
        this.isLoading = false; 
        this.showSuccessModal = true; 
      }, 2000); 
    } else {
      console.log('Form is invalid');
    }
  }

  goToHomepage() {
    this.showSuccessModal = false;
    this.router.navigate(['/']); 
  }
}
