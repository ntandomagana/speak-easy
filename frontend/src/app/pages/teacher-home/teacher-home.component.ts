import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-home',
  imports: [],
  templateUrl: './teacher-home.component.html',
  styleUrl: './teacher-home.component.css'
})
export class TeacherHomeComponent {

    upcomingLessonsToday = [
    {
      studentName: 'Berry M.',
      time: '10:00 AM',
      level: 'Beginner',
      language: 'English'
    },
    {
      studentName: 'Ntando Z.',
      time: '2:00 PM',
      level: 'Intermediate',
      language: 'English'
    }
  ];

  upcomingLessonsThisWeek = [
    {
      studentName: 'Zinhle K.',
      date: 'Tuesday',
      time: '11:00 AM',
      level: 'Advanced',
      language: 'English'
    },
    {
      studentName: 'Sibongile M.',
      date: 'Thursday',
      time: '4:00 PM',
      level: 'Beginner',
      language: 'English'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

}
