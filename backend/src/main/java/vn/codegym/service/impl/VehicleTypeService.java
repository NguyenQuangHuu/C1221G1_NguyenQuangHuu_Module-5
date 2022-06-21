package vn.codegym.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import vn.codegym.model.VehicleType;
import vn.codegym.repository.IVehicleTypeRepository;
import vn.codegym.service.IVehicleService;
import vn.codegym.service.IVehicleTypeService;

import java.util.List;

@Service
public class VehicleTypeService implements IVehicleTypeService {
    @Autowired
    private IVehicleTypeRepository iVehicleTypeRepository;

    @Override
    public List<VehicleType> getAll() {
        return this.iVehicleTypeRepository.findAll();
    }
}
