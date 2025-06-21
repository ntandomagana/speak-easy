import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-teacher-profile',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './teacher-profile.component.html',
  styleUrl: './teacher-profile.component.css'
})
export class TeacherProfileComponent implements OnInit {

  teacherProfileForm!: FormGroup;
  profileImageUrl: string | null = null;
    selectedImageFile: File | null = null;

  showToast = false;
  toastMessage = '';



  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const userInfo = JSON.parse(localStorage.getItem('loggedInUserInfo') || '{}');

    this.teacherProfileForm = this.fb.group({
      name: [userInfo.name || '', Validators.required],
      location: ['', Validators.required],
      bio: ['', Validators.required],
      language: ['', Validators.required],
      price: ['', Validators.required],
      availability: ['', Validators.required],
    });
  }

  saveProfile(): void {
    if (this.teacherProfileForm.valid) {
      const profileData = {
        ...this.teacherProfileForm.value,
        profileImage: this.selectedImageFile ? this.selectedImageFile.name : 'No image selected'
      };

      console.log('Profile data to save:', profileData);
      this.showSuccessToast('Profile saved successfully!');
      
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
