import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContractsRoutingModule} from './contracts-routing.module';
import {ContractsComponent} from './contracts.component';
import {ContractListComponent} from './contract-list/contract-list.component';
import {ContractCreateComponent} from './contract-create/contract-create.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    ContractsComponent,
    ContractListComponent,
    ContractCreateComponent
  ],
  imports: [
    CommonModule,
    ContractsRoutingModule,
    SharedModule
  ]
})
export class ContractsModule { }
