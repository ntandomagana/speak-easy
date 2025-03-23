import { Routes } from '@angular/router';
import { TeachersListComponent } from './pages/teachers-list/teachers-list.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent

    },
    {
        path: 'teachers-list',
        component: TeachersListComponent
    }
];
