import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AvatarModule } from 'ngx-avatar';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailComponent } from './components/detail/detail.component';
import { ListingsComponent } from './components/listings/listings.component';
import { ContractComponent } from './contract/contract.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ContractService} from './contract.service';
import {GoogleMapsModule} from '@angular/google-maps';
import { MapComponent } from './map/map.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { VisitComponent } from './visit/visit.component';
import { ContractPdfComponent } from './contract-pdf/contract-pdf.component';
import { NotificationComponent } from './notification/notification.component';
import { Maps2Component } from './maps2/maps2.component';
import { UpdateContractComponent } from './update-contract/update-contract.component';
import { ToastrModule } from 'ngx-toastr';
import { SubscriptionManagementComponent } from './subscription-management/subscription-management.component';


@NgModule({
  declarations: [AppComponent, DetailComponent, ListingsComponent, ContractComponent, MapComponent, SubscriptionComponent, VisitComponent, ContractPdfComponent, NotificationComponent, Maps2Component, UpdateContractComponent, SubscriptionManagementComponent],
imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, FormsModule, GoogleMapsModule,AvatarModule, ToastrModule.forRoot(),],
  providers: [ContractService],
  bootstrap: [AppComponent],
})
export class AppModule {}
