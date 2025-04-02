import { Routes } from '@angular/router';
import { TeachersListComponent } from './pages/teachers-list/teachers-list.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { BookLessonComponent } from './components/book-lesson/book-lesson.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent

    },
    {
        path: 'teachers-list',
        component: TeachersListComponent
    },
    {
        path: 'book-lesson',
        component: BookLessonComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
