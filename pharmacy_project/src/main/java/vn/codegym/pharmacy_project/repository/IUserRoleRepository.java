package vn.codegym.pharmacy_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.codegym.pharmacy_project.model.Roles;
import vn.codegym.pharmacy_project.model.UserRole;

import java.util.List;

public interface IUserRoleRepository extends JpaRepository<UserRole,Integer> {
    List<UserRole> findUserRolesByUsers_Username(String username);
}
