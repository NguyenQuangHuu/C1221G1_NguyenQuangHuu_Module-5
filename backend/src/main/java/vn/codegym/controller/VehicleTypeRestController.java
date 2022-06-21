package vn.codegym.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.codegym.model.VehicleType;
import vn.codegym.service.IVehicleTypeService;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/vehicle-type")
public class VehicleTypeRestController {

    @Autowired
    private IVehicleTypeService iVehicleTypeService;

    @GetMapping("")
    public ResponseEntity<List<VehicleType>> getAllVehicleType(){
        List<VehicleType> vehicleTypeList = this.iVehicleTypeService.getAll();
        return new ResponseEntity<>(vehicleTypeList, HttpStatus.OK);
    }
}
