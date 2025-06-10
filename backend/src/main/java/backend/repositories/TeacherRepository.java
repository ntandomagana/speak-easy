package backend.repositories;

import backend.models.Booking;
import backend.models.Student;
import backend.models.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Long>  {
    Optional<Teacher> findById(Long id);
    Optional<Teacher> findByEmail(String email);;

}
