package vn.codegym.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import vn.codegym.dto.VehicleDto;
import vn.codegym.model.Vehicle;

public interface IVehicleService {
    Page<Vehicle> getAll(Pageable pageable);

    void newVehicle(VehicleDto vehicleDto);

    Vehicle findById(Integer id);

    void updateVehicle(Vehicle vehicle, VehicleDto vehicleDto);

    void deleteById(Vehicle vehicle);

    Page<Vehicle> search(String startTime, String spot, Pageable pageable);
}
