package backend.controllers;

import backend.models.Student;
import backend.services.StudentProfileService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/student-profile")
public class StudentProfileController {
    private final StudentProfileService studentService;

    public StudentProfileController(StudentProfileService service) {
        this.studentService = service;
    }

    @PostMapping
    public Student saveProfile(@RequestBody Student student) {
        return studentService.saveStudent(student);
    }

    @GetMapping("/{id}")
    public Student getStudent(@PathVariable Long id) {
        return studentService.getStudentById(id);
    }

    @PutMapping("/{id}")
    public Student update(@PathVariable Long id, @RequestBody Student student) {
        student.setId(id);
        return studentService.saveStudent(student);
    }

}
