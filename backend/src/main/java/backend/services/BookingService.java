package backend.services;

import backend.dtos.BookingDTO;
import java.util.List;

public interface BookingService {
    BookingDTO createBooking(BookingDTO bookingDTO);
    BookingDTO getBookingById(Long id);
    List<BookingDTO> getAllBookings();
    List<BookingDTO> getBookingsByStudentId(Long studentId);
    List<BookingDTO> getBookingsByTeacherId(Long teacherId);
    BookingDTO cancelBooking(Long id);
}
