import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  facilityCreateFG: FormGroup;
  constructor() {
    this.facilityCreateFG = new FormGroup({
      id: new FormControl(0),
      code: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.pattern('' +
        '^(\\s?[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨ' +
        'ƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂ' +
        'ưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệ' +
        'ỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]\\s?)*$')]),
      type: new FormControl('', [Validators.required]),
      convenience: new FormControl('', [Validators.required]),
      usable: new FormControl('', [Validators.required, Validators.pattern('[+]?\\\\d*\\\\.?\\\\d*')]),
      price: new FormControl('', [Validators.required, Validators.pattern('[+]?\\\\d*\\\\.?\\\\d*')]),
      floors: new FormControl('', [Validators.required, Validators.pattern('[+]?\\\\d+')]),
      capacity: new FormControl('', [Validators.required, Validators.pattern('[+]?\\\\d+')]),
      pool_usable: new FormControl('', [Validators.required, Validators.pattern('[+]?\\\\d*\\\\.?\\\\d*')]),
      standard_room: new FormControl('', [Validators.required]),
      rent_type: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }
  facilityCreateSubmit() {
    console.log(this.facilityCreateFG.value);
  }
}
