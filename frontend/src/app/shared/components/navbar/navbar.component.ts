import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router,
              private authService: AuthService
  ) {}

//method to check login state
  isLoggedIn(): boolean {
    return !!localStorage.getItem('loggedInUserInfo');
  }

    get loggedInUser(): any | null {
    const user = localStorage.getItem('loggedInUserInfo');
    return user ? JSON.parse(user) : null;
  }

  // Getter for user name
  get loggedInUserName(): string {
    return this.loggedInUser?.name || '';
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
