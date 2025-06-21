import { Routes } from '@angular/router';
import { TeachersListComponent } from './pages/teachers-list/teachers-list.component';
import { LandingPageComponent } from './shared/components/landing-page/landing-page.component';
import { BookLessonComponent } from './shared/components/book-lesson/book-lesson.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { TeacherProfileComponent } from './pages/teacher-profile/teacher-profile.component';

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
        path: 'book-lesson/:id',
        component: BookLessonComponent

    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'student-profile',
        component: StudentProfileComponent
    },
    {
        path: 'teacher-profile',
        component: TeacherProfileComponent
    }
];
