package vn.codegym.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.codegym.model.CoachStation;
import vn.codegym.model.VehicleType;

public interface IVehicleTypeRepository extends JpaRepository<VehicleType,Integer> {
}
