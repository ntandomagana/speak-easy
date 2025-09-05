package backend.controllers;

import backend.models.Teacher;
import backend.services.TeacherProfileService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/teacher-profile")
public class TeacherProfileController {
    private final TeacherProfileService teacherService;
    public TeacherProfileController(TeacherProfileService teacherService) {
        this.teacherService = teacherService;
    }

    @PostMapping
    public Teacher saveProfile(@RequestBody Teacher teacher) {
        return teacherService.saveTeacher(teacher);
    }

    @GetMapping("/{id}")
    public Teacher getTeacher(@PathVariable Long id) {
        return teacherService.getTeacherById(id);
    }

}
