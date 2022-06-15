import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../facility.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  facilityCreateFG: FormGroup;
  constructor(private facilityService: FacilityService, private route: Router) {
    this.facilityCreateFG = new FormGroup({
      id: new FormControl(1),
      code: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.pattern('' +
        '^(\\s?[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨ' +
        'ƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂ' +
        'ưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệ' +
        'ỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]\\s?)*$')]),
      type: new FormControl('', [Validators.required]),
      convenience: new FormControl('', [Validators.required]),
      usable: new FormControl('', [Validators.required, Validators.pattern('[+]?\\d*\\.?\\d*')]),
      price: new FormControl('', [Validators.required, Validators.pattern('[+]?\\d*\\.?\\d*')]),
      floor: new FormControl('', [Validators.required, Validators.pattern('[+]?\\d*')]),
      capacity: new FormControl('', [Validators.required, Validators.pattern('[+]?\\d*')]),
      pool_usable: new FormControl('', [Validators.required, Validators.pattern('[+]?\\d*\\.?\\d*')]),
      standard_room: new FormControl('', [Validators.required]),
      rent_type: new FormControl('', [Validators.required]),
      img: new FormControl('room1.jpg')
    });
  }

  ngOnInit(): void {
  }
  facilityCreateSubmit() {

      const facility = this.facilityCreateFG.value;
      this.facilityService.addFacility(facility);
      this.facilityCreateFG.reset();
      this.route.navigateByUrl('/facility').then();

  }
}
