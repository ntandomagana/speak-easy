import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherProfileData } from '../../types/teacher-profile';
import { TeacherProfileService } from '../../services/teacher-profile.service';

@Component({
  selector: 'app-teacher-profile',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './teacher-profile.component.html',
  styleUrl: './teacher-profile.component.css',
})
export class TeacherProfileComponent implements OnInit {
  teacherProfileForm!: FormGroup;
  profileImageUrl: string | null = null;
  selectedImageFile: File | null = null;

  showToast = false;
  toastMessage = '';

  constructor(private fb: FormBuilder,
              private router: Router,
              private teacherProfileService: TeacherProfileService
  ) {}

   ngOnInit(): void {

    this.teacherProfileForm = this.fb.group({
    name: ['', Validators.required],
    location: ['', Validators.required],
    bio: ['', Validators.required],
    language: ['', Validators.required],
    price: ['', [Validators.required, Validators.min(0)]],
    availability: ['', Validators.required],
  });

    // Load saved profile from localStorage if exists
    const savedProfile = localStorage.getItem('loggedInTeacherProfile');
    const userInfo = localStorage.getItem('loggedInUserInfo');

    if (savedProfile) {
      const profile: TeacherProfileData = JSON.parse(savedProfile);
      this.teacherProfileForm.patchValue(profile);
      console.log('Loaded profile from localStorage:', profile);
      this.profileImageUrl = profile.profileImageUrl || null;
    } else if (userInfo) {
      const user = JSON.parse(userInfo);
      this.teacherProfileForm.patchValue({ name: user.name });
      console.log('Loaded user info from localStorage:', user);
    }
  }

  saveProfile(): void {
    if (this.teacherProfileForm.valid) {

       const email = this.teacherProfileForm.get('email')?.value;
       
      const profileData: TeacherProfileData = {
        ...this.teacherProfileForm.value,
        profileImage: this.selectedImageFile ? this.selectedImageFile.name : this.profileImageUrl || null
      };

      this.teacherProfileService.saveProfile(profileData).subscribe({
        next: (res: TeacherProfileData) => {
          console.log('Profile saved successfully', res);

          // Save profile in localStorage
          localStorage.setItem('loggedInTeacherProfile', JSON.stringify(res));

          this.showSuccessToast('Profile saved successfully!');
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 2000);
        },
        error: (err) => {
          console.error('Error saving profile', err);
          this.showSuccessToast('Error saving profile. Please try again.');
        }
      });

    } else {
      this.showSuccessToast('Please fill in all required fields.');
      this.teacherProfileForm.markAllAsTouched();
    }
  }

  showSuccessToast(message: string) {
    this.toastMessage = message;
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }

  onImageSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profileImageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
