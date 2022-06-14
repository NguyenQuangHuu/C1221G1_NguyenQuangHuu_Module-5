import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  facilityCreateFG: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.facilityCreateFG = new FormGroup({
      code: new FormControl(''),
      name: new FormControl(''),
      type: new FormControl(''),
      convenience: new FormControl(''),
      usable: new FormControl(''),
      price: new FormControl(''),
      floors: new FormControl(''),
      capacity: new FormControl(''),
      pool_usable: new FormControl(''),
      standard_room: new FormControl(''),
      rent_type: new FormControl(''),
    });
  }
  facilityCreateSubmit() {
    console.log(this.facilityCreateFG.value);
  }
}
