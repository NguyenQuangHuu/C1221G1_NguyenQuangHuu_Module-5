import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ItemService} from '../../service/item.service';
import {Router} from '@angular/router';
import {CoachStationService} from '../../service/coach-station.service';
import {VehicleTypeService} from '../../service/vehicle-type.service';
import {VehicleType} from '../../model/vehicleType';
import {CoachStation} from '../../model/coach-station';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {
  createForm: FormGroup;
  vehicleTypes: VehicleType[];
  coachStation: CoachStation[];
  constructor(private vehicleService: ItemService, private route: Router,
              private coachStationService: CoachStationService,
              private vehicleTypeService: VehicleTypeService) {
    this.createForm = new FormGroup({
      id: new FormControl(''),
      numberPlate: new FormControl('', [Validators.required]),
      coachStation: new FormControl('', [Validators.required]),
      types: new FormControl('', [Validators.required]),
      startSpot: new FormControl('', [Validators.required]),
      stopSpot: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('',
        [Validators.pattern('^((090)|(093)|(097))\\d{7}$'), Validators.required, Validators.minLength(1)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      startTime: new FormControl('', [Validators.required]),
      stopTime: new FormControl('', [Validators.required]),
    }, );
  }

  ngOnInit(): void {
    this.coachStationService.getAll().subscribe(
      data => this.coachStation = data
    );
    this.vehicleTypeService.getAll().subscribe(
      data => this.vehicleTypes = data
    );
  }
  compareFn(t1, t2): boolean {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }

  submitEdit() {
    console.log(this.createForm);
    console.log(this.createForm.valid);
    if (this.createForm.valid) {
      const vehicle = this.createForm.value;
      this.vehicleService.add(vehicle).subscribe(
        next => {
          this.route.navigateByUrl('/item/list').then();
        }
      );
    }
  }
}
