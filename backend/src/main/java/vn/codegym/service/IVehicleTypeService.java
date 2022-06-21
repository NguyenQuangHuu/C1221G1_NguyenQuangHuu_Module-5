package vn.codegym.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import vn.codegym.model.VehicleType;

import java.util.List;

public interface IVehicleTypeService {
    List<VehicleType> getAll();
}
