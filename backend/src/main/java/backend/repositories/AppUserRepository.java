package backend.repositories;

import backend.models.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AppUserRepository extends JpaRepository {
    Optional<AppUser> findByEmail(String email);
    boolean existsByEmail(String email);
}
