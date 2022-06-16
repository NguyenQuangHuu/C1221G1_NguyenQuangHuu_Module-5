import {Component, OnInit} from '@angular/core';
import {Facility} from '../facility';
import {FacilityService} from '../facility.service';

@Component({
  selector: 'app-facility',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilities: Facility[] = [];
  modalId: number;
  modalName: string;
  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.facilityService.getAll().subscribe(
      next => this.facilities = next
    );
  }

  modalDelete(id: number, name: string) {
    this.modalId = id;
    this.modalName = name;
  }

  delete(modalId: number) {
    this.facilityService.findById(modalId).subscribe(
      next => {
        this.facilityService.remove(next.id).subscribe(
         n => {
           this.ngOnInit();
           alert('Xoa thanh cong');
         }
        );
      }
    );
  }
}
