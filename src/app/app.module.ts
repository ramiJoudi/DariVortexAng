import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { DetailComponent } from './components/detail/detail.component';
import { ListingsComponent } from './components/listings/listings.component';
import { HttpClientModule } from '@angular/common/http';
import {SearchBuyRentService} from './search-buy-rent.service';
import {FormsModule} from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormulaireComponent } from './formulaire/formulaire.component';
import {NgxPayPalModule} from 'ngx-paypal';
import { AvatarModule } from 'ngx-avatar';
import { HistoricalComponent } from './historical/historical.component';
import { ContractComponent } from './contract/contract.component';
import { EstimateComponent } from './estimate/estimate.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
@NgModule({
  declarations: [AppComponent, DetailComponent, ListingsComponent, FormulaireComponent, HistoricalComponent, ContractComponent, EstimateComponent ],
  imports: [BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    HttpClientModule ,
    FormsModule ,
    NoopAnimationsModule,
    NgxChartsModule,
    NgxPayPalModule,
    AvatarModule],
  providers: [SearchBuyRentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
