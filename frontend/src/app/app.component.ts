import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { BookLessonComponent } from './components/book-lesson/book-lesson.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent,
    LandingPageComponent,
    BookLessonComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
