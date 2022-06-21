package vn.codegym.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.codegym.model.Vehicle;
import vn.codegym.model.VehicleType;

public interface IVehicleRepository extends JpaRepository<Vehicle,Integer> {
}
