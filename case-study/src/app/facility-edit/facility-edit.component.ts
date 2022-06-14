import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  editFacilityForm: FormGroup;
  constructor() {
    this.editFacilityForm = new FormGroup({
      id: new FormControl(0),
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

  ngOnInit(): void {
  }

  editFacilitySubmit() {
    console.log(this.editFacilityForm.value);
  }
}
