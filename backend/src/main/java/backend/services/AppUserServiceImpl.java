package backend.services;

import backend.dtos.AppUserDTO;
import backend.models.AppUser;
import backend.repositories.AppUserRepository;
import backend.services.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AppUserServiceImpl implements AppUserService  {

private final AppUserRepository appUserRepository;

@Autowired
    public AppUserServiceImpl(AppUserRepository appUserRepository) {
    this.appUserRepository = appUserRepository;
}

@Override
public AppUser registerUser(AppUserDTO dto) {
    if(appUserRepository.findByEmail(dto.getEmail()).isPresent()) {
        throw new RuntimeException("Email already exists.");
    }
    AppUser user = new AppUser();
    user.setName(dto.getName());
    user.setEmail(dto.getEmail());
    user.setPassword(dto.getPassword());
    user.setRole(dto.getRole());

    return appUserRepository.save(user);
}

    @Override
    public AppUser loginUser(String email, String password) {
    Optional<AppUser> userOptional = appUserRepository.findByEmail(email);
    if (userOptional.isEmpty()) {
        throw new RuntimeException("Invalid email or passwords");
    }

    AppUser user = userOptional.get();
    if (!user.getPassword().equals(password)) {
        throw new RuntimeException("Invalid email or password");
    }
    return user;
    }

}
