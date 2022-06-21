package vn.codegym.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.codegym.model.CoachStation;
import vn.codegym.service.ICoachStationService;
import vn.codegym.service.IVehicleTypeService;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/coach-station")
public class CoachStationRestController {
    @Autowired
    private ICoachStationService iCoachStationService;

    @GetMapping("")
    public ResponseEntity<List<CoachStation>> getAllCoachStation(){
        List<CoachStation> coachStationList = this.iCoachStationService.getAll();
        return new ResponseEntity<>(coachStationList, HttpStatus.OK);
    }

}
