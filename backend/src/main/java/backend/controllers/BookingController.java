package backend.controllers;

import backend.dtos.BookingDTO;
import backend.models.Booking;
import backend.services.BookingServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/bookings")
public class BookingController {
    private final BookingServiceImpl bookingService;

    public BookingController(BookingServiceImpl bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping
    public ResponseEntity<BookingDTO> createBooking(
            @RequestBody Booking booking
    ) {
        BookingDTO dto1 = bookingService.createBooking(booking.getTeacher(), booking.getStudent(), booking);
        return ResponseEntity.ok(dto1);
    }
}
