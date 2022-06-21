import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import {ItemListComponent} from './item-list/item-list.component';
import {ItemCreateComponent} from './item-create/item-create.component';
import {ItemEditComponent} from './item-edit/item-edit.component';
import {ItemsComponent} from './items.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ItemsComponent,
    ItemListComponent,
    ItemCreateComponent,
    ItemEditComponent
  ],
    imports: [
        CommonModule,
        ItemsRoutingModule,
        NgxPaginationModule,
        ReactiveFormsModule,
    ]
})
export class ItemsModule { }
