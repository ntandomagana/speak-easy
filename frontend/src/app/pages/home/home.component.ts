import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


   role: string = '';
  upcomingLessonsToday: any[] = [];
  upcomingLessonsThisWeek: any[] = [];

      constructor(private router: Router) {} 


  ngOnInit() {
    const userInfo = localStorage.getItem('loggedInUserInfo');
    if (userInfo) {
      this.role = JSON.parse(userInfo).role;
    }

    // Dummy Data (replace with real data later)
    this.upcomingLessonsToday = [
      { studentName: 'Berry', level: 'Beginner', language: 'English', time: '10:00 AM' }
    ];

    this.upcomingLessonsThisWeek = [
      { studentName: 'Berry', level: 'Intermediate', language: 'English', date: 'Wed', time: '2:00 PM' }
    ];
  }

   goToReviews() {
    this.router.navigate(['/teacher-reviews']);
  }

}
