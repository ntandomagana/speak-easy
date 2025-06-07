import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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

  constructor(private fb: FormBuilder,
     private router: Router,
     private authService: AuthService) { 

    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['STUDENT', [Validators.required]]
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

      const payload = this.signupForm.value;
      console.log('Payload sent to backend:', payload);

      this.authService.signup(payload).subscribe({
        next: (response) => {
          console.log('Signup successful', response);
          this.isLoading = false; 
          this.showSuccessModal = true; 
          this.signupForm.reset();
        },
         error: (err) => {
        this.isLoading = false;
        console.error('Signup error:', err); 
         }
        })
      

      setTimeout(() => {
        this.isLoading = false; 
        this.showSuccessModal = true; 
      }, 2000); 
    } else {
      this.signupForm.markAllAsTouched();
      console.log('Form is invalid');
    }
  }

  goToHomepage() {
    this.showSuccessModal = false;
    this.router.navigate(['/teachers-list']); 
  }
}
