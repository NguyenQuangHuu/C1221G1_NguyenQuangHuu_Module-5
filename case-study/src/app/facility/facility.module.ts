import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import { FacilityComponent } from './facility.component';
import {FacilityListComponent} from './facility-list/facility-list.component';
import {FacilityCreateComponent} from './facility-create/facility-create.component';
import {FacilityEditComponent} from './facility-edit/facility-edit.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    FacilityComponent,
    FacilityListComponent,
    FacilityCreateComponent,
    FacilityEditComponent,
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    SharedModule
  ]
})
export class FacilityModule { }
