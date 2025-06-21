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
  emailExistsError = false;

  constructor(private fb: FormBuilder,
     private router: Router,
     private authService: AuthService) { 

    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', [Validators.required]]
    });
  }

    ngOnInit(): void {}


  toggleRole(role: string): void {
    this.role = role;
    this.signupForm.get('role')?.setValue(role.toUpperCase());  
  }

  onSubmit() {
  if (this.signupForm.valid) {
    this.isLoading = true;
    this.emailExistsError = false; // reset the error before request

    const formValues = this.signupForm.value;
    console.log('Payload sent to backend:', formValues);

    this.authService.signup(formValues).subscribe({
      next: (response) => {
        console.log('Signup successful', response);
        this.isLoading = false;
        this.showSuccessModal = true;

        // save user information in localStorage
        localStorage.setItem('token', response.token);
        localStorage.setItem('role', response.role);
        localStorage.setItem('loggedInUserInfo', JSON.stringify(formValues));

        // reset the form after saving the values
        this.signupForm.reset();
      },
      error: (err) => {
  this.isLoading = false;

  if (err.status === 409) {
    this.emailExistsError = true;
  } else {
    this.emailExistsError = false;
    console.error('Signup error:', err);
  }
}

    });

  } else {
    this.signupForm.markAllAsTouched();
    console.log('Form is invalid');
  }
}

  

  goToHomepage() {
    this.showSuccessModal = false;
    this.router.navigate(['/teacher-profile']); 
  }
}
