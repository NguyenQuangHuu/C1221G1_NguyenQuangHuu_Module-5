import { Component, OnInit } from '@angular/core';
import {Facility} from '../facility/facility';
import {FacilityService} from '../facility/facility.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  facilities: Facility[] = [

  ];
  constructor(private service: FacilityService) {

  }

  ngOnInit(): void {
   this.getAll();
  }
  getAll() {
    this.service.getAll().subscribe(
      next => this.facilities = next
    );
  }

}
