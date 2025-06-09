import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('loggedInUserInfo');
  }

  getUserRole(): string | null {
    const user = localStorage.getItem('loggedInUserInfo');
    if (user) {
      return JSON.parse(user).role || null;
    }
    return null;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
