import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { ListingsComponent } from './components/listings/listings.component';
import { ContractPdfComponent } from './contract-pdf/contract-pdf.component';
import {ContractComponent} from './contract/contract.component';
import { SubscriptionManagementComponent } from './subscription-management/subscription-management.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { VisitComponent } from './visit/visit.component';

const routes: Routes = [
  
  {
    path: 'listings',
    component: ListingsComponent,
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    outlet: 'd',
  },
  {
    path: 'contract',
    component: ContractComponent,
  },
  {
    path: 'contractp',
    component: ContractPdfComponent,
  },
  {
    path: 'visits',
    component: VisitComponent,
  },
  {
    path: 'subscription',
    component: SubscriptionComponent,
  },
  {
    path: 'subscriptionMang',
    component: SubscriptionManagementComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
