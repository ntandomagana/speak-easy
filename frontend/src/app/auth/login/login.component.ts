import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';


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
      private router: Router,
      private authService: AuthService
    ) {
      this.loginForm = this.fb.group({
         email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // role: [this.role.toUpperCase()]
     });

  }

  toggleRole(role: string): void {
    this.role = role;
    this.loginForm.get('role')?.setValue(role.toUpperCase());
    // this.role = this.role === 'student' ? 'teacher' : 'student';
    // this.loginForm.get('role')?.setValue(this.role); 
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true; 
      console.log(this.loginForm.value);

      const payload = this.loginForm.value;

      payload.role = this.role.toUpperCase(); 
      console.log('Payload sent to backend:', payload);

      this.authService.login(payload).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          this.isLoading = false; 
          this.showSuccessModal = true; 
          this.loginForm.reset();
          this.router.navigate(['/teachers-list']);

          //store user information in localStorage
          localStorage.setItem('token', response.token);
          localStorage.setItem('role', response.role);
          localStorage.setItem('loggedInUserInfo', JSON.stringify(response.userInfo));
          localStorage.setItem('userId', response.userInfo.id);

          if (response.role === 'TEACHER') {
            this.router.navigate(['/teacher-dashboard']);
          } else {
            this.router.navigate(['/teachers-list']);
          }
        },
        error: (err) => {
          this.isLoading = false;
          console.error('Login error:', err); 
        }
      })

      setTimeout(() => {
        this.isLoading = false; 
        this.showSuccessModal = true; 
      }, 2000); 
    } else {
      console.log('Form is invalid');
    }
  }
}

  


