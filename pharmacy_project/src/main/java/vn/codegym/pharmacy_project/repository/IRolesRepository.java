package vn.codegym.pharmacy_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.codegym.pharmacy_project.model.Roles;
import vn.codegym.pharmacy_project.model.UserRole;
import vn.codegym.pharmacy_project.model.Users;

import javax.management.relation.Role;
import java.util.List;

public interface IRolesRepository extends JpaRepository<Roles,Integer> {

}
