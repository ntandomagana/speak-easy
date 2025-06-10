package backend.controllers;

import backend.dtos.BookingDTO;
import backend.models.Booking;
import backend.services.BookingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/v1/bookings")
public class BookingController {
    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    //endpoint to create a new booking
    @PostMapping
    public BookingDTO createBooking(@RequestBody BookingDTO bookingDTO) {

        return bookingService.createBooking(bookingDTO);


    }

    @GetMapping("/student/{studentId}")
    public List<BookingDTO> getBookingsByStudent(@PathVariable Long studentId) {
        return bookingService.getBookingsByStudentId(studentId);
    }

    @GetMapping("/teacher/{teacherId}")
    public List<BookingDTO> getBookingsByTeacher(@PathVariable Long teacherId) {
        return bookingService.getBookingsByTeacherId(teacherId);
    }

    @PostMapping("/{bookingId}/cancel")
    public BookingDTO cancelBooking(@PathVariable Long bookingId) {
        return bookingService.cancelBooking(bookingId);
    }


    }
