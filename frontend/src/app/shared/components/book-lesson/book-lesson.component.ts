import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BookingService } from '../../../services/booking.service';
import { BookingPayload } from '../../../types/booking';

@Component({
  selector: 'app-book-lesson',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './book-lesson.component.html',
  styleUrl: './book-lesson.component.css',
})
export class BookLessonComponent implements OnInit {
  bookingForm!: FormGroup;
  bookingData!: BookingPayload;
  showModal = false;
  showConfirmationModal = false;
  isLoading = false;
  teacherId!: string;
  studentId!: string;

  constructor(private fb: FormBuilder,
    private bookingService: BookingService,
  ) {}

  ngOnInit(): void {

    const userInfo = JSON.parse(localStorage.getItem('loggedInUserInfo') || '{}');

    if (userInfo.role !== 'student') {
      alert('You must be logged in as a student to book a lesson.');
      return;

  //      this.teacherId = this.route.snapshot.paramMap.get('teacherId') || '';
  // this.studentId = userInfo.id;


    this.bookingForm = this.fb.group({
      lessonType: ['', Validators.required],
      level: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
    });
  }
}

  confirmBooking() {
    if (this.bookingForm.valid) {

      const formValues = this.bookingForm.value;
      const lessonDateTime = `${formValues.date}T${formValues.time}:00`;

      const userInfo = JSON.parse(localStorage.getItem('loggedInUserInfo') || '{}');
      const studentId = userInfo.id || '';
      
      this.bookingData = {
        teacherId: this.teacherId,
        studentId: studentId,
        lessonType: formValues.lessonType,
        level: formValues.level,
        lessonDateTime: lessonDateTime,
        // cancelled: false 
      }

      this.showModal = true;
      console.log('booking data', this.bookingForm.value);
    } else {
      alert('Please fill in all fields.');
      console.log('Form is invalid');
    }
  }

  closeModal() {
    this.showModal = false;
  }
  

  bookLesson() {
    this.isLoading = true;

    // Call the createBooking method from the service
    this.bookingService.createBooking(this.bookingData).subscribe(
      (response) => {
        console.log('Booking confirmed:', response);
        
        setTimeout(() => {
          this.isLoading = false;
          this.showModal = false;
          this.showConfirmationModal = true;
        }, 3000);
      },
      (error) => {
        console.error('Booking failed:', error);
        
        // Handle error if the booking fails
        setTimeout(() => {
          this.isLoading = false;
          alert('Booking failed. Please try again.');
        }, 3000);
      }
    );
  }

  closeConfirmationModal() {
    this.showConfirmationModal = false;
  }

}

