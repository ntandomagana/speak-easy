package backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<String> handleRuntimeException(RuntimeException ex) {
        ex.printStackTrace();
        if (ex.getMessage().contains("Email already exists")) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(ex.getMessage());
        }

        if (ex.getMessage().contains("Student not found")) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Student not found");
        }

        if (ex.getMessage().contains("Teacher not found")) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Teacher not found");
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal server error");
    }
}
