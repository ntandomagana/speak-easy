import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LandingPageComponent } from './shared/components/landing-page/landing-page.component';
// import { BookLessonComponent } from './components/book-lesson/book-lesson.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent,
    LandingPageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
