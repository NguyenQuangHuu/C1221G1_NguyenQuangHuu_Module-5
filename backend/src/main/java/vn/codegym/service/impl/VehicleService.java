package vn.codegym.service.impl;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import vn.codegym.dto.VehicleDto;
import vn.codegym.model.Vehicle;
import vn.codegym.repository.IVehicleRepository;
import vn.codegym.service.IVehicleService;

@Service
public class VehicleService implements IVehicleService {
    @Autowired
    private IVehicleRepository iVehicleRepository;

    @Override
    public Page<Vehicle> getAll(Pageable pageable) {
        return this.iVehicleRepository.findAll(pageable);
    }

    @Override
    public void newVehicle(VehicleDto vehicleDto) {
        Vehicle vehicle =  new Vehicle();
        BeanUtils.copyProperties(vehicleDto,vehicle);
        this.iVehicleRepository.save(vehicle);
    }

    @Override
    public Vehicle findById(Integer id) {
        return this.iVehicleRepository.findById(id).orElse(null);
    }

    @Override
    public void updateVehicle(Vehicle vehicle, VehicleDto vehicleDto) {
        BeanUtils.copyProperties(vehicleDto,vehicle);
        this.iVehicleRepository.save(vehicle);
    }

    @Override
    public void deleteById(Vehicle vehicle) {
        this.iVehicleRepository.delete(vehicle);
    }

    @Override
    public Page<Vehicle> search(String startTime,String spot, Pageable pageable) {
        return this.iVehicleRepository.findAllByStartTimeContainingAndStopSpotContaining(startTime,spot, pageable);
    }
}
