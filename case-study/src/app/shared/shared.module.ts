import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgxPaginationModule,
  ]
})
export class SharedModule { }
