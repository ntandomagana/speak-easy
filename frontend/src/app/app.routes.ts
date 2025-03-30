import { Routes } from '@angular/router';
import { TeachersListComponent } from './pages/teachers-list/teachers-list.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { BookLessonComponent } from './components/book-lesson/book-lesson.component';

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
    }
];
