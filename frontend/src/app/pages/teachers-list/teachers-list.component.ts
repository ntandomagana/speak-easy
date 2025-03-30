import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-teachers-list',
  imports: [RouterModule],
  templateUrl: './teachers-list.component.html',
  styleUrl: './teachers-list.component.css'
})
export class TeachersListComponent {

  constructor(private router: Router) {}
 

  navigateToBooking() {
    this.router.navigate(['/book-lesson']);
  }

}
