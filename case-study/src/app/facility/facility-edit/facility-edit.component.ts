import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FacilityService} from '../facility.service';
import {Facility} from '../facility';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  editFacilityForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private facilityService: FacilityService, private route:Router) {
      activatedRoute.paramMap.subscribe( (param: ParamMap) => {
        const id = param.get('id');
        // tslint:disable-next-line:radix
        this.facilityService.findById(parseInt(id)).subscribe(
          facility => {
            this.editFacilityForm = new FormGroup({
              id: new FormControl(facility.id),
              code: new FormControl(facility.code, [Validators.required]),
              name: new FormControl(facility.name, [Validators.required, Validators.pattern('' +
                '^(\\s?[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨ' +
                'ƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂ' +
                'ưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệ' +
                'ỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]\\s?)*$')]),
              type: new FormControl(facility.type, [Validators.required]),
              convenience: new FormControl(facility.convenience, [Validators.required]),
              usable: new FormControl(facility.usable, [Validators.required, Validators.pattern('[+]?\\d*\\.?\\d*')]),
              price: new FormControl(facility.price, [Validators.required, Validators.pattern('[+]?\\d*\\.?\\d*')]),
              floor: new FormControl(facility.floor, [Validators.required, Validators.pattern('[+]?\\d+')]),
              capacity: new FormControl(facility.capacity, [Validators.required, Validators.pattern('[+]?\\d+')]),
              pool_usable: new FormControl(facility.pool_usable, [Validators.required, Validators.pattern('[+]?\\d*\\.?\\d*')]),
              standard_room: new FormControl(facility.standard_room, [Validators.required]),
              rent_type: new FormControl(facility.rent_type, [Validators.required]),
              img: new FormControl(facility.img)
            });
          }
        );
      });
  }

  ngOnInit(): void {

  }

  editFacilitySubmit() {
      console.log(this.editFacilityForm);
      console.log(this.editFacilityForm.valid);
      if (this.editFacilityForm.valid) {
        const facility = this.editFacilityForm.value;
        this.facilityService.update(facility.id, facility).subscribe(
          next => {
            this.editFacilityForm.reset();
            this.route.navigateByUrl('/facility/list').then();
          }
        );
      }

  }
}
