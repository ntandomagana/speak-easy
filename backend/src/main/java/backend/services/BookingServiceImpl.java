package backend.services;

import backend.dtos.BookingDTO;
import backend.models.Booking;
import backend.models.LessonType;
import backend.models.Level;
import backend.models.Student;
import backend.models.Teacher;
import backend.repositories.BookingRepository;
import backend.repositories.StudentRepository;
import backend.repositories.TeacherRepository;
import backend.services.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private TeacherRepository teacherRepository;

    @Override
    public BookingDTO createBooking(BookingDTO bookingDTO) {

        //this will fetch the student and teacher from the db
        Student student = studentRepository.findById(bookingDTO.getStudentId())
                .orElseThrow(() -> new RuntimeException("Student not found"));

        Teacher teacher = teacherRepository.findById(bookingDTO.getTeacherId())
                .orElseThrow(() -> new RuntimeException("Teacher not found"));

        // Create booking
        Booking booking = new Booking();
        booking.setStudent(student);
        booking.setTeacher(teacher);
        booking.setLessonType(LessonType.valueOf(bookingDTO.getLessonType()));
        booking.setLevel(Level.valueOf(bookingDTO.getLevel()));
        booking.setLessonDateTime(bookingDTO.getLessonDateTime());
        booking.setCancelled(false);

        // Save and return DTO
        Booking savedBooking = bookingRepository.save(booking);
        return convertToDTO(savedBooking);
    }

    @Override
    public BookingDTO getBookingById(Long id) {
        return null;
    }

    @Override
    public List<BookingDTO> getAllBookings() {
        return List.of();
    }

    @Override
    public BookingDTO cancelBooking(Long bookingId) {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found with id: " + bookingId));
        booking.setCancelled(true);
        Booking updatedBooking = bookingRepository.save(booking);

        return convertToDTO(booking);
    }

    @Override
    public List<BookingDTO> getBookingsByStudentId(Long studentId) {
        List<Booking> bookings = bookingRepository.findByStudentId(studentId);
        return bookings.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<BookingDTO> getBookingsByTeacherId(Long teacherId) {
        List<Booking> bookings = bookingRepository.findByTeacherId(teacherId);
        return bookings.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    private BookingDTO convertToDTO(Booking booking) {
        BookingDTO dto = new BookingDTO();
        dto.setId(booking.getId());
        dto.setStudentId(booking.getStudent().getId());
        dto.setTeacherId(booking.getTeacher().getId());
        dto.setLessonType(booking.getLessonType().name());
        dto.setLevel(booking.getLevel().name());
        dto.setLessonDateTime(booking.getLessonDateTime());
        dto.setCancelled(booking.isCancelled());
        return dto;
    }
}

