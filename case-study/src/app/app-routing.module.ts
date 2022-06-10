import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FacilityComponent} from './facility/facility.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {FacilityCreateComponent} from './facility-create/facility-create.component';
import {FacilityEditComponent} from './facility-edit/facility-edit.component';

const  routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/facility'
  },
  {
    path: 'facility', component: FacilityComponent
  },
  {
    path: 'facility-create', component : FacilityCreateComponent
  },
  {
    path: 'facility-edit', component : FacilityEditComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
