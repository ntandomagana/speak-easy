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

  profileForm!: FormGroup;
  profileImageUrl: string | null = null;



  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const userInfo = JSON.parse(localStorage.getItem('loggedInUserInfo') || '{}');

    this.profileForm = this.fb.group({
      name: [userInfo.name || '', Validators.required],
      location: ['', Validators.required],
      bio: ['', Validators.required],
      language: ['', Validators.required],
      price: ['', Validators.required],
      availability: ['', Validators.required],
    });
  }

  saveProfile(): void {
    if (this.profileForm.valid) {
      console.log('Teacher Profile:', this.profileForm.value);
      alert('Profile saved!');
    } else {
      this.profileForm.markAllAsTouched();
    }
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
