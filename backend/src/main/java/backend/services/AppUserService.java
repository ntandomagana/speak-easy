package backend.services;

import backend.models.AppUser;

public interface AppUserService {

    AppUser saveUser(AppUser user);
    AppUser findByEmail(String email);
}
