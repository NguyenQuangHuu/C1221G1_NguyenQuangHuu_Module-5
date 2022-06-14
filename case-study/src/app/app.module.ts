import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FacilityComponent } from './facility/facility.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { ContractComponent } from './contracts/contract/contract.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FacilityCreateComponent } from './facility-create/facility-create.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { FacilityEditComponent } from './facility-edit/facility-edit.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { ContractCreateComponent } from './contracts/contract-create/contract-create.component';
import { HomepageComponent } from './homepage/homepage.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FacilityComponent,
    CustomerComponent,
    ContractComponent,
    HeaderComponent,
    FooterComponent,
    FacilityCreateComponent,
    FacilityEditComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    ContractCreateComponent,
    HomepageComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        CommonModule,
        AppRoutingModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
