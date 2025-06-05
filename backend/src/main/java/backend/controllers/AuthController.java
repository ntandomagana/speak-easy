package backend.controllers;


import backend.dtos.AppUserDTO;
import backend.models.AppUser;
import backend.services.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")

public class AuthController {
    private final AppUserService appUserService;

    @Autowired
    public AuthController(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @PostMapping("/signup")
    public AppUser signup(@RequestBody AppUserDTO dto) {
        return appUserService.registerUser(dto);
    }

    @PostMapping("/login")
    public AppUser login(@RequestBody AppUserDTO dto) {
        System.out.println("DTO Email: " + dto.getEmail());
        System.out.println("DTO Password: " + dto.getPassword());
        return appUserService.loginUser(dto.getEmail(), dto.getPassword());
    }
}
