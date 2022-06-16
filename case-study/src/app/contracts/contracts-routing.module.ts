import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContractListComponent} from './contract-list/contract-list.component';
import {ContractCreateComponent} from './contract-create/contract-create.component';
import {ContractsComponent} from './contracts.component';


const routes: Routes = [
  {
    path: 'contract', component: ContractsComponent, children: [
      {
        path: 'list', component: ContractListComponent,
      },
      {
        path: 'create', component: ContractCreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractsRoutingModule { }
