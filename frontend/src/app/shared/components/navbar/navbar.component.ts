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
  showMenu = false;
  hasNotifications = true;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  // Check if user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('loggedInUserInfo');
  }

  // Getter: return user object from localStorage
  get loggedInUser(): any | null {
    const user = localStorage.getItem('loggedInUserInfo');
    return user ? JSON.parse(user) : null;
  }

  // Getter: return user name
  get loggedInUserName(): string {
    return this.loggedInUser?.name || '';
  }

  // Getter: return user role (STUDENT, TEACHER, etc.)
  get userRole(): string {
    return this.loggedInUser?.role || '';
  }

  // Used in HTML to control dropdown visibility
  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

 onNotificationClick() {
  alert('Notifications clicked!');
}
  // Clear localStorage and navigate to login
  logout(): void {
    localStorage.clear();
    this.showMenu = false;
    this.router.navigate(['/login']);
  }
}