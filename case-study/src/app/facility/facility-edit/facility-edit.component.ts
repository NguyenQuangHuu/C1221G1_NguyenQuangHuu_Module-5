import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FacilityService} from '../facility.service';
import {Facility} from '../facility-list/facility';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  editFacilityForm: FormGroup;
  facility: Facility;
  constructor(private activatedRoute: ActivatedRoute, private facilityService: FacilityService, private route:Router) {
      activatedRoute.paramMap.subscribe( (param: ParamMap) => {
        const id = param.get('id');
        // tslint:disable-next-line:radix
        this.facility = this.facilityService.findById(parseInt(id));
        console.log(this.facility);
      });
  }

  ngOnInit(): void {
    this.editFacilityForm = new FormGroup({
      id: new FormControl(this.facility.id),
      code: new FormControl(this.facility.code, [Validators.required]),
      name: new FormControl(this.facility.name, [Validators.required, Validators.pattern('' +
        '^(\\s?[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨ' +
        'ƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂ' +
        'ưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệ' +
        'ỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]\\s?)*$')]),
      type: new FormControl(this.facility.type, [Validators.required]),
      convenience: new FormControl(this.facility.convenience, [Validators.required]),
      usable: new FormControl(this.facility.usable, [Validators.required, Validators.pattern('[+]?\\\\d*\\\\.?\\\\d*')]),
      price: new FormControl(this.facility.price, [Validators.required, Validators.pattern('[+]?\\\\d*\\\\.?\\\\d*')]),
      floor: new FormControl(this.facility.floor, [Validators.required, Validators.pattern('[+]?\\\\d+')]),
      capacity: new FormControl(this.facility.capacity, [Validators.required, Validators.pattern('[+]?\\\\d+')]),
      pool_usable: new FormControl(this.facility.pool_usable, [Validators.required, Validators.pattern('[+]?\\\\d*\\\\.?\\\\d*')]),
      standard_room: new FormControl(this.facility.standard_room, [Validators.required]),
      rent_type: new FormControl(this.facility.rent_type, [Validators.required]),
      img: new FormControl(this.facility.img)
    });
  }

  editFacilitySubmit() {

      const facility = this.editFacilityForm.value;
      this.facilityService.update(facility);
      this.editFacilityForm.reset();
      this.route.navigateByUrl('/facility').then();

  }
}
