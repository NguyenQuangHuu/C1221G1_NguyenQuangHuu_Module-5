import { Injectable } from '@angular/core';
import {Facility} from './facility-list/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilityList: Facility[] = [
    {
      id: 1,
      code: 'VL-1234',
      name: 'Villa 4 Season',
      usable: 30.0,
      price: 3000000,
      convenience: 'Cám chim',
      floor: 4,
      capacity: 10,
      pool_usable: 20.0,
      standard_room: 'VIP',
      rent_type: 'DAY',
      img: 'room1.jpg'
    },
    {
      id: 2,
      code: 'VL-1234',
      name: 'Villa Ocean',
      usable: 30.0,
      price: 4500000,
      convenience: 'Cám chim',
      floor: 4,
      capacity: 10,
      pool_usable: 20.0,
      standard_room: 'VIP',
      rent_type: 'DAY',
      img: 'room2.jpg'
    },
    {
      id: 3,
      code: 'VL-1234',
      name: 'Villa Front Ocean View',
      usable: 30.0,
      price: 6000000,
      convenience: 'Cám chim',
      floor: 4,
      capacity: 10,
      pool_usable: 20.0,
      standard_room: 'VIP',
      rent_type: 'DAY',
      img: 'room3.jpg'
    },
    {
      id: 4,
      code: 'VL-1234',
      name: 'House 4 Season',
      usable: 30.0,
      price: 1000000,
      convenience: 'Cám chim',
      floor: 4,
      capacity: 10,
      pool_usable: 20.0,
      standard_room: 'VIP',
      rent_type: 'DAY',
      img: 'room4.jpg'
    },
    {
      id: 5,
      code: 'VL-1234',
      name: 'House 4 U',
      usable: 30.0,
      price: 45000,
      convenience: 'Cám chim',
      floor: 4,
      capacity: 10,
      pool_usable: 20.0,
      standard_room: 'VIP',
      rent_type: 'DAY',
      img: 'room5.jpg'
    },
    {
      id: 6,
      code: 'VL-1234',
      name: 'Villa 4 Season',
      usable: 30.0,
      price: 45000,
      convenience: 'Cám chim',
      floor: 4,
      capacity: 10,
      pool_usable: 20.0,
      standard_room: 'VIP',
      rent_type: 'DAY',
      img: 'room6.jpg'
    },
  ];
  constructor() { }

  getAll(): Facility[] {
    return this.facilityList;
  }

  addFacility(facility: Facility) {
    let count = 1;
    this.facilityList.forEach(
      // tslint:disable-next-line:no-shadowed-variable
      facility => {
        if (facility.id === count) {
          count++;
        }
      }
    );
    facility.id = count;
    console.log(facility);
    this.facilityList.push(facility);
  }

  findById(id: number): Facility {
    const list = this.facilityList.filter((customer) => customer.id === id);
    return list[0];
  }

  update(facility: Facility) {
    for (const k in this.facilityList) {
      if (this.facilityList[k].id === facility.id) {
        this.facilityList[k] = facility;
      }
    }
  }

  remove(facility: Facility) {
    this.facilityList = this.facilityList.filter( facilities => facilities.id !== facility.id);
  }
}
