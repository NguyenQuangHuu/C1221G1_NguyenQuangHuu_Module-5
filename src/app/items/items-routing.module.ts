import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemsComponent} from './items.component';
import {ItemListComponent} from './item-list/item-list.component';
import {ItemCreateComponent} from './item-create/item-create.component';
import {ItemEditComponent} from './item-edit/item-edit.component';


const routes: Routes = [
  {
    path: 'item' , component: ItemsComponent,
    children : [
      {
      path : 'list', component: ItemListComponent
      },
      {
        path: 'create', component: ItemCreateComponent
      },
      {
        path: 'edit/:id', component: ItemEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
