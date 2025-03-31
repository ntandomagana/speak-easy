package backend.dtos;

import backend.models.LessonType;
import backend.models.Level;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

public class BookingDTO {
    private Long id;
    private String teacherName;
    private String studentName;
    private LessonType lessonType;
    private LocalDate date;
    private LocalTime time;

}
