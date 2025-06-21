
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-profile',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent {

   profileForm!: FormGroup;

  ngOnInit() {
    const userInfo = JSON.parse(localStorage.getItem('loggedInUserInfo') || '{}');

    this.profileForm = new FormBuilder().group({
      name: [{ value: userInfo.name || '', disabled: true }, Validators.required],
      email: [{ value: userInfo.email || '', disabled: true }, [Validators.required, Validators.email]],
      level: [{ value: userInfo.level || '', disabled: true }, Validators.required],
      languages: [userInfo.languages || '', Validators.required],
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const updatedLanguages = this.profileForm.get('languages')?.value;
      console.log('Updated Languages:', updatedLanguages);


    } else {
      this.profileForm.markAllAsTouched();
    }
  }

}
