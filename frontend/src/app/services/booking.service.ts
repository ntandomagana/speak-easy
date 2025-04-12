import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Booking } from '../types/booking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private apiUrl = environment.SERVER + 'api/v1/bookings';

  constructor(private http: HttpClient) { }

  createBooking(booking: Booking): Observable<any> {
    return this.http.post(this.apiUrl, {
      teacherId: booking.teacherId,
      studentId: booking.studentId,
      lessonType: booking.lessonType,        
      level: booking.level,                  
      lessonDateTime: booking.lessonDateTime,
      cancelled: booking.cancelled
    });
  }
}
