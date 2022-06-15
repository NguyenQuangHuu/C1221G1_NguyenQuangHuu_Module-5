import {Component, OnInit} from '@angular/core';
import {Facility} from './facility';
import {FacilityService} from '../facility.service';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facilities: Facility[] = [];
  modalId: number;
  modalName: string;
  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.facilities = this.facilityService.getAll();
  }

  modalDelete(id: number, name: string) {
    this.modalId = id;
    this.modalName = name;
  }

  delete(modalId: number) {
    const facility = this.facilityService.findById(modalId);
    if(facility !== null){
      this.facilityService.remove(facility);
    }
    this.ngOnInit();
  }
}
