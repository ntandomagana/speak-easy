package backend.services;

import backend.dtos.SignupDTO;
import backend.models.AppUser;

public interface AppUserService {
;
    AppUser registeruser(SignupDTO appUserDTO)
    AppUser saveUser(AppUser user);
    AppUser findByEmail(String email);
}
