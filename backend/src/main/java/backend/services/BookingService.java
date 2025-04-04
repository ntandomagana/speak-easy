package backend.services;

import backend.dtos.BookingDTO;
import backend.models.Booking;
import backend.models.Student;
import backend.models.Teacher;

import java.util.List;

public interface BookingService {

    BookingDTO createBooking(Teacher teacher, Student student, Booking booking);
    BookingDTO getBookingById(Long id);
    List<BookingDTO> getAllBookings();
    void cancelBooking(Long id);


}
