package vn.codegym.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.codegym.dto.VehicleDto;
import vn.codegym.model.Vehicle;
import vn.codegym.service.IVehicleService;

import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/vehicles")
public class VehicleRestController {

    @Autowired
    private IVehicleService iVehicleService;

    @GetMapping("")
    public ResponseEntity<Page<Vehicle>> getAllVehicle(Pageable pageable,
                                                       @RequestParam("startTime") Optional<String> startTime,
                                                       @RequestParam("spotSearch") Optional<String> spotSearch
                                                       ){
        if(spotSearch.isPresent() || startTime.isPresent()){
            String start = startTime.orElse("");
            String spot = spotSearch.orElse("");
            Page<Vehicle> vehicleList = this.iVehicleService.search(start,spot,pageable);
            return new ResponseEntity<>(vehicleList,HttpStatus.OK);
        }
        Page<Vehicle> vehicleList = this.iVehicleService.getAll(pageable);
        return new ResponseEntity<>(vehicleList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Vehicle> getVehicleById(@PathVariable Integer id){
        Vehicle vehicle = this.iVehicleService.findById(id);
        if(vehicle == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(vehicle,HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<Void> newVehicle(@RequestBody VehicleDto vehicleDto){
        this.iVehicleService.newVehicle(vehicleDto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Void> updateVehicle(@PathVariable Integer id, @RequestBody VehicleDto vehicleDto){
        Vehicle vehicle = this.iVehicleService.findById(id);
        if(vehicle == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        this.iVehicleService.updateVehicle(vehicle,vehicleDto);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVehicle(@PathVariable Integer id){
        Vehicle vehicle = this.iVehicleService.findById(id);
        if(vehicle == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        this.iVehicleService.deleteById(vehicle);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}
