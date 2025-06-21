import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';
import { BookingPayload } from '../types/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseUrl = environment.SERVER + 'api/v1/bookings';

  constructor(private http: HttpClient) { }

  createBooking(payload: BookingPayload): Observable<any> {
    return this.http.post(`${this.baseUrl}`, payload);
  }
}
