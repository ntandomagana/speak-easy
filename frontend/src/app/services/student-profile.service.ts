import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentProfileData } from '../types/student-profile';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class StudentProfileService {

  private apiUrl = 'http://localhost:8080/api/v1/student-profile';

  constructor(private http: HttpClient) { }

  saveProfile(profileData: StudentProfileData): Observable<StudentProfileData> {
    return this.http.post<StudentProfileData>(`${this.apiUrl}`, profileData);
  }

  // Fetch a student by ID
  getProfile(id: string): Observable<StudentProfileData> {
    return this.http.get<StudentProfileData>(`${this.apiUrl}/${id}`);
  }

  updateProfile(id: string, profileData: StudentProfileData): Observable<StudentProfileData> {
  return this.http.put<StudentProfileData>(`${this.apiUrl}/${id}`, profileData);
}



}
