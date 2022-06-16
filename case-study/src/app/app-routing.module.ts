import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FacilityComponent} from './facility/facility-list/facility.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {FacilityCreateComponent} from './facility/facility-create/facility-create.component';
import {FacilityEditComponent} from './facility/facility-edit/facility-edit.component';
import {CustomerComponent} from './customer/customer-list/customer.component';
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
    path: 'contract',
    loadChildren: () => import('./contracts/contracts.module').then(module => module.ContractsModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)
  },
  {
    path: 'facility',
    loadChildren: () => import('./facility/facility.module').then(module => module.FacilityModule)
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
