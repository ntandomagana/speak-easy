package backend.services;

import backend.dtos.BookingDTO;
import backend.models.Booking;
import backend.models.Teacher;
import backend.repositories.BookingRepository;
import backend.repositories.StudentRepository;
import backend.repositories.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
    public BookingDTO createBooking(BookingDTO bookingDTO) {
        Teacher teacher = teacherRepository.findByName(bookingDTO.getTeacherName())
        return null;
    }

    @Override
    public BookingDTO getBookingById(Long id) {
        Booking booking
        return null;
    }

    @Override
    public List<BookingDTO> getAllBookings() {
        return List.of();
    }

    @Override
    public void cancelBooking(Long id) {

    }
}
