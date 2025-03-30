import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-book-lesson',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './book-lesson.component.html',
  styleUrl: './book-lesson.component.css'
})
export class BookLessonComponent implements OnInit {

  bookingForm!: FormGroup;
  bookingData: any;
  showModal = false;
  showConfirmationModal = false;
  isLoading = false;


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      lessonType: ['', Validators.required],
      level: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]

    })

   
      
  }

  confirmBooking() {
    if (this.bookingForm.valid) {
      this.bookingData = this.bookingForm.value;
      this.showModal = true;
      console.log(this.bookingForm.value);
    } else {
      alert("Please fill in all fields.")
      console.log('Form is invalid');
    }
  }

  closeModal() {
    this.showModal = false;
  }

  bookLesson() {
    this.isLoading = true;  
    console.log('Booking confirmed:', this.bookingData);
    setTimeout(() => {
      this.isLoading = false;  
      this.showModal = false;  
      this.showConfirmationModal = true;  
    }, 3000);
  }

  closeConfirmationModal() {
    this.showConfirmationModal = false;
  }

}
