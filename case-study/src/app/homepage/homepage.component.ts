import { Component, OnInit } from '@angular/core';
import {Facility} from '../facility/facility';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  facilities: Facility[] = [
    {
      id: 1,
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
      img: 'room1.jpg'
    },
    {
      id: 2,
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
      img: 'room2.jpg'
    },
    {
      id: 3,
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
      img: 'room3.jpg'
    },
    {
      id: 4,
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
      img: 'room4.jpg'
    },
    {
      id: 5,
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

  ngOnInit(): void {
  }

}
