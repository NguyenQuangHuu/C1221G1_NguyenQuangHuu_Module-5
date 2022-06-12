import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FacilityComponent} from './facility/facility.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {FacilityCreateComponent} from './facility-create/facility-create.component';
import {FacilityEditComponent} from './facility-edit/facility-edit.component';
import {CustomerComponent} from './customer/customer/customer.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {ContractComponent} from './contracts/contract/contract.component';
import {ContractCreateComponent} from './contracts/contract-create/contract-create.component';
import {HomepageComponent} from './homepage/homepage.component';

const  routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/home'
  },
  {
    path: 'home', component : HomepageComponent
  },
  {
    path: 'facility', component: FacilityComponent
  },
  {
    path: 'facility-create', component : FacilityCreateComponent
  },
  {
    path: 'facility-edit', component : FacilityEditComponent
  },
  {
    path: 'customer', component : CustomerComponent
  },
  {
    path: 'customer-create', component : CustomerCreateComponent
  },
  {
    path: 'customer-edit', component : CustomerEditComponent
  },
  {
    path: 'contract', component: ContractComponent
  },
  {
    path: 'contract-create', component: ContractCreateComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
