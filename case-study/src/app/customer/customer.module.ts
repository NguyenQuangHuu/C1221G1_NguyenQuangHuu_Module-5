import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import {SharedModule} from '../shared/shared.module';
import { CustomerComponent } from './customer.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ]
})
export class CustomerModule { }
