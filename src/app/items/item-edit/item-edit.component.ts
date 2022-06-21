import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ItemService} from '../../service/item.service';
import {Vehicle} from '../../model/vehicle';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {VehicleTypeService} from '../../service/vehicle-type.service';
import {VehicleType} from '../../model/vehicleType';
import {CoachStationService} from '../../service/coach-station.service';
import {CoachStation} from '../../model/coach-station';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit{
  plate: string;
  vehicle: Vehicle;
  editForm: FormGroup;
  vehicleTypes: VehicleType[];
  coachStation: CoachStation[];
  constructor(private activatedRoute: ActivatedRoute, private vehicleService: ItemService,
              private vehicleTypeService: VehicleTypeService,
              private coachStationService: CoachStationService,
              private route: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.vehicleService.findById(id).subscribe(
        data => {
          this.vehicle = data;
          console.log(this.vehicle.numberPlate);
          this.editForm = new FormGroup({
            id: new FormControl(this.vehicle.id, [Validators.required]),
            numberPlate: new FormControl(this.vehicle.numberPlate, [Validators.required]),
            coachStation: new FormControl(this.vehicle.coachStation, [Validators.required]),
            types: new FormControl(this.vehicle.types, [Validators.required]),
            startSpot: new FormControl(this.vehicle.startSpot, [Validators.required]),
            stopSpot: new FormControl(this.vehicle.stopSpot, [Validators.required]),
            phoneNumber: new FormControl(this.vehicle.phoneNumber,
              [Validators.pattern('^((090)|(093)|(097))\\d{7}$'), Validators.required, Validators.minLength(1)]),
            email: new FormControl(this.vehicle.email, [Validators.required, Validators.email]),
            startTime: new FormControl(this.vehicle.startTime, [Validators.required]),
            stopTime: new FormControl(this.vehicle.stopTime, [Validators.required]),
          }, );
        }
      );
    });
  }

  ngOnInit(): void {
    this.vehicleTypeService.getAll().subscribe(
      data => this.vehicleTypes = data,
    );
    this.coachStationService.getAll().subscribe(
      data => this.coachStation = data,
    );
  }

  submitEdit() {
    console.log(this.editForm);
    console.log(this.editForm.valid);
    if (this.editForm.valid) {
      const vehicle = this.editForm.value;
      this.vehicleService.updateById(vehicle.id, vehicle).subscribe(
        data => {
          this.route.navigateByUrl('/item/list').then();
          this.ngOnInit();
        }
      );
    } else {
      alert('CÓ GÌ ĐÓ CHƯA ĐÚNG, THỬ KIỂM TRA LẠI XEM');
    }
  }

  compareFn(t1, t2): boolean {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }

}
