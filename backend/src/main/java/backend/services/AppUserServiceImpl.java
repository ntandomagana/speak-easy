import backend.dtos.SignupDTO;
import backend.models.AppUser;
import backend.repositories.AppUserRepository;
import backend.services.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppUserServiceImpl implements AppUserService {

private final AppUserRepository appUserRepository;

@Autowired
    public AppUserServiceImpl(AppUserRepository appUserRepository) {
    this.appUserRepository = appUserRepository;
}

@Override
    public AppUser registerUser(SignupDTO dto) {
    AppUser user = new AppUser();

    user.setName(dto.getName());
    user.setEmail(dto.getEmail());
    user.setPassword(dto.getPassword());
    user.setRole(dto.getRole());

    return appUserRepository.save(user);

}


}
