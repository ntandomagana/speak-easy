package backend.services;

import backend.dtos.BookingDTO;
import backend.models.Booking;
import backend.models.Level;
import backend.models.LessonType;
import backend.models.Student;
import backend.models.Teacher;
import backend.repositories.BookingRepository;
import backend.repositories.StudentRepository;
import backend.repositories.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class BookingServiceImpl implements BookingService {

    private final BookingRepository bookingRepository;
    private final TeacherRepository teacherRepository;
    private final StudentRepository studentRepository;

    @Autowired
    public BookingServiceImpl(BookingRepository bookingRepository,
                              TeacherRepository teacherRepository,
                              StudentRepository studentRepository) {
        this.bookingRepository = bookingRepository;
        this.teacherRepository = teacherRepository;
        this.studentRepository = studentRepository;
    }

    @Override
    public BookingDTO createBooking(BookingDTO dto) {
        Optional<Teacher> optionalTeacher = teacherRepository.findById(dto.teacherId);
        Optional<Student> optionalStudent = studentRepository.findById(dto.studentId);

        if (optionalTeacher.isEmpty()) {
            throw new RuntimeException("Teacher not found");
        }

        if (optionalStudent.isEmpty()) {
            throw new RuntimeException("Student not found");
        }

        Booking booking = new Booking();
        booking.setTeacher(optionalTeacher.get());
        booking.setStudent(optionalStudent.get());
        booking.setLessonType(LessonType.valueOf(dto.lessonType));
        booking.setLevel(Level.valueOf(dto.level));
        booking.setLessonDateTime(LocalDateTime.parse(dto.lessonDateTime));
        booking.setCancelled(dto.cancelled);

        bookingRepository.save(booking);

        return mapToDTO(booking);
    }

    private BookingDTO mapToDTO(Booking booking) {
        BookingDTO dto = new BookingDTO();
        dto.teacherId = booking.getTeacher().getId();
        dto.studentId = booking.getStudent().getId();
        dto.lessonType = booking.getLessonType().toString();
        dto.level = booking.getLevel().toString();
        dto.lessonDateTime = booking.getLessonDateTime().toString();
        dto.cancelled = booking.isCancelled();
        return dto;
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
    public void cancelBooking(Long id) {}
}
