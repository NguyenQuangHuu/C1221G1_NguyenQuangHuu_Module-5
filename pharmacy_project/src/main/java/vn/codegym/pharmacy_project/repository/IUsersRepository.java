package vn.codegym.pharmacy_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.codegym.pharmacy_project.model.Users;

import java.util.Optional;

public interface IUsersRepository extends JpaRepository<Users,String> {
    Optional<Users> findByUsername(String username);

    Boolean existsByUsername(String username);
}
