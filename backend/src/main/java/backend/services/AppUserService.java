package backend.services;

import backend.dtos.AppUserDTO;
import backend.dtos.AppUserDTO;
import backend.models.AppUser;

public interface AppUserService {
    AppUser registerUser(AppUserDTO dto);
    AppUser loginUser(String email, String password);

}
