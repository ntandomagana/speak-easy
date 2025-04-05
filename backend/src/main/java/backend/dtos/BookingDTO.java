package backend.dtos;

import backend.models.LessonType;
import backend.models.Level;
import backend.models.Student;
import backend.models.Teacher;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

public class BookingDTO {
    private Long teacherId;
    private Long studentId;
    private LessonType lessonType;
    private Level level;
    private LocalDateTime lessonDateTime;
    private boolean isCancelled = false;

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public Long getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(Long teacherId) {
        this.teacherId = teacherId;
    }

    public LessonType getLessonType() {
        return lessonType;
    }

    public void setLessonType(LessonType lessonType) {
        this.lessonType = lessonType;
    }

    public Level getLevel() {
        return level;
    }

    public void setLevel(Level level) {
        this.level = level;
    }

    public LocalDateTime getLessonDateTime() {
        return lessonDateTime;
    }

    public void setLessonDateTime(LocalDateTime lessonDateTime) {
        this.lessonDateTime = lessonDateTime;
    }

    public boolean isCancelled() {
        return isCancelled;
    }

    public void setCancelled(boolean cancelled) {
        isCancelled = cancelled;
    }
}
