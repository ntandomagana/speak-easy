import { Injectable } from '@angular/core';
import { TeacherProfileData } from '../types/teacher-profile';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://localhost:8080/api/v1/teachers';

  constructor(private http: HttpClient) { }

  saveProfile(profileData: TeacherProfileData): Observable<TeacherProfileData> {
    return this.http.post<TeacherProfileData>(`${this.apiUrl}/profile`, profileData);
  }

  getProfile(id: string): Observable<TeacherProfileData> {
    return this.http.get<TeacherProfileData>(`${this.apiUrl}/profile/${id}`);
  }
}
