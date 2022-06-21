import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../service/item.service';
import {Vehicle} from '../../model/vehicle';
import {Router} from '@angular/router';
import {VehicleTypeService} from '../../service/vehicle-type.service';
import {VehicleType} from '../../model/vehicleType';
import {CoachStation} from '../../model/coach-station';
import {CoachStationService} from '../../service/coach-station.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  idModal: number;
  nameModal: string;
  vehicleList: Vehicle[] = [];
  spotList: VehicleType[] = [];
  stationList: CoachStation[] = [];
  p: string | number = 0;
  constructor(private service: ItemService,
              private route: Router,
              private vehicleTypeService: VehicleTypeService,
              private coachStation: CoachStationService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.service.getAll().subscribe(
      data => {
        // @ts-ignore
        this.vehicleList = data.content;
      },
        error => console.log(error)
    );
  }
  getTypeList() {
    this.vehicleTypeService.getAll().subscribe(
      data => this.spotList = data,
    );
  }

  getCoachStationList() {
    this.coachStation.getAll().subscribe(
      data => this.stationList = data
    );
  }

  modal(id: number, name: string) {
    this.idModal = id;
    this.nameModal = name;
  }

  deleteModal(idModal: number) {
    this.service.deleteById(idModal).subscribe(
      success => {
      this.route.navigateByUrl('/item/list').then();
      this.ngOnInit();
    }
    );
  }
}
