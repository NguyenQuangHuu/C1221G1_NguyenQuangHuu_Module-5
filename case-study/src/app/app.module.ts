import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HomepageComponent} from './homepage/homepage.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
// @ts-ignore
import {NgxPaginationModule} from 'ngx-pagination';
import {ContractsComponent} from './contracts/contracts.component';
import {ContractsModule} from './contracts/contracts.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CustomerModule} from './customer/customer.module';
import {FacilityModule} from './facility/facility.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
  ],
    imports: [
        BrowserModule,
        RouterModule,
        CommonModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        ContractsModule,
        CustomerModule,
        FacilityModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
