package backend.services;

import backend.models.Teacher;
import backend.repositories.TeacherRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class TeacherProfileService {
    private final TeacherRepository teacherRepository;

    public TeacherProfileService(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
    }

    public Teacher saveTeacher(Teacher teacher) {
        return teacherRepository.save(teacher);
    }

    public Teacher getTeacherById(Long id) {
        return teacherRepository.findById(id).orElse(null);
    }
}
