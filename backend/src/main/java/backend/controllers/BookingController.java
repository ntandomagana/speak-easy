package backend.controllers;

import backend.dtos.BookingDTO;
import backend.models.Booking;
import backend.services.BookingService;
import backend.services.BookingServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/bookings")
public class BookingController {
    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping
    public ResponseEntity<BookingDTO> createBooking(
            @RequestParam Long teacherId,
            @RequestParam Long studentId,
            @RequestBody Booking booking
    ) {
        BookingDTO dto = bookingService.createBooking(teacherId, studentId, booking);
        return ResponseEntity.ok(dto);
    }

}

