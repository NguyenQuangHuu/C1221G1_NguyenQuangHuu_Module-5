import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
      code: new FormControl('', [Validators.required, Validators.pattern('')]),
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

  editFacilitySubmit() {
    console.log(this.editFacilityForm.value);
  }
}
