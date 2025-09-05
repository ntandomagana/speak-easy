import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentProfileService } from '../../services/student-profile.service';
import { Router } from '@angular/router';
import { StudentProfileData } from '../../types/student-profile';

@Component({
  selector: 'app-student-profile',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent implements OnInit {

  profileForm!: FormGroup;
  showToast = false;
  toastMessage = '';
  studentId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private studentProfileService: StudentProfileService,
    private router: Router
  ) {}

  ngOnInit() {
    // Load current student info from localStorage if exists
    const userInfo = JSON.parse(localStorage.getItem('loggedInUserInfo') || '{}');
    const savedProfile = localStorage.getItem('loggedInStudentProfile');

    if (savedProfile) {
      const profile: StudentProfileData = JSON.parse(savedProfile);
      this.studentId = profile.id?.toString() || null;

      this.profileForm = this.fb.group({
        name: [{ value: userInfo.name, disabled: true }, Validators.required],
        email: [{ value: userInfo.email, disabled: true }, [Validators.required, Validators.email]],
        level: [{ value: profile.level, disabled: true }, Validators.required],
        languages: [profile.languages || '', Validators.required]
      });
    } else {
      this.profileForm = this.fb.group({
        name: [{ value: userInfo.name || '', disabled: true }, Validators.required],
        email: [{ value: userInfo.email || '', disabled: true }, [Validators.required, Validators.email]],
        level: [{ value: userInfo.level || '', disabled: true }, Validators.required],
        languages: [userInfo.languages || '', Validators.required]
      });
    }
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const profileData: StudentProfileData = {
        ...this.profileForm.getRawValue(),
        id: this.studentId, // include id if updating
      };

      // Remove id if null/undefined (for creating new profile)
      if (!this.studentId) delete (profileData as any).id;

      this.studentProfileService.saveProfile(profileData).subscribe({
        next: (res) => {
          console.log('Student profile saved', res);
          localStorage.setItem('loggedInStudentProfile', JSON.stringify(res));
          this.showSuccessToast('Profile saved successfully!');

          setTimeout(() => this.router.navigate(['/home']), 2000);
        },
        error: (err) => {
          console.error('Error saving student profile', err);
          this.showSuccessToast('Error saving profile. Please try again.');
        }
      });
    } else {
      this.profileForm.markAllAsTouched();
    }
  }

  showSuccessToast(message: string) {
    this.toastMessage = message;
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3000);
  }
}
