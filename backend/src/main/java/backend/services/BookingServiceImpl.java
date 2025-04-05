package backend.services;

import backend.dtos.BookingDTO;
import backend.models.Booking;
import backend.models.Student;
import backend.models.Teacher;
import backend.repositories.BookingRepository;
import backend.repositories.StudentRepository;
import backend.repositories.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingServiceImpl implements BookingService {

    private BookingRepository bookingRepository;
    private TeacherRepository teacherRepository;
    private StudentRepository studentRepository;

    @Autowired
    public BookingServiceImpl(BookingRepository bookingRepository,
                              TeacherRepository teacherRepository,
                              StudentRepository studentRepository

                              ) {
        this.bookingRepository = bookingRepository;
        this.teacherRepository = teacherRepository;
        this.studentRepository = studentRepository;

    }


    @Override
    public BookingDTO createBooking(Long teacherId, Long studentId, Booking booking) {
        // find the teacher
        Optional<Teacher> optionalTeacher =  teacherRepository.findById(teacherId);
        // find the student
        Optional<Student> optionalStudent = studentRepository.findById(studentId);

        // if-statements
        if (optionalTeacher.isEmpty()) {
            throw new RuntimeException("Teacher is not existent");
        }

        if (optionalStudent.isEmpty()) {
            throw new RuntimeException("Student is not existent");
        }

        booking.setStudent(optionalStudent.get());
        booking.setTeacher(optionalTeacher.get());
        booking.setLessonType(booking.getLessonType());
        booking.setLessonDateTime(booking.getLessonDateTime());
        booking.setLevel(booking.getLevel());
        booking.setCancelled(booking.isCancelled());

        bookingRepository.save(booking);

        return EntityToDTO(booking);

//
//        BookingDTO dto = EntityToDTO(booking);
//        return dto;
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
    public void cancelBooking(Long id) {

    }

    BookingDTO EntityToDTO(Booking booking) {
        BookingDTO dto = new BookingDTO();
        dto.setTeacherId(booking.getTeacher().getId());
        dto.setStudentId(booking.getStudent().getId());
        dto.setLessonType(booking.getLessonType());
        dto.setLevel(booking.getLevel());
        dto.setLessonDateTime(booking.getLessonDateTime());
        dto.setCancelled(booking.isCancelled());
        return dto;
    }
}
