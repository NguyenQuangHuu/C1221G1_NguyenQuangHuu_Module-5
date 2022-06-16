import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HomepageComponent} from './homepage/homepage.component';
import {ContractsModule} from './contracts/contracts.module';
import {ContractsComponent} from './contracts/contracts.component';
import {FacilityComponent} from './facility/facility.component';
import {FacilityModule} from './facility/facility.module';

const  routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/home'
  },
  {
    path: 'home', component : HomepageComponent
  },
  {
    path: 'contract', component: ContractsComponent
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)
  },
  {
    path: 'facility', component: FacilityComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ContractsModule,
    FacilityModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
