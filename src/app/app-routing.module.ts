import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { ListingsComponent } from './components/listings/listings.component';
import {FormulaireComponent} from './formulaire/formulaire.component';
import {HistoricalComponent} from './historical/historical.component';
import {ContractComponent} from "./contract/contract.component";
import {EstimateComponent} from "./estimate/estimate.component";

const routes: Routes = [
  {
    path: 'listings',
    component: ListingsComponent,
  },

  {
    path: 'form',
    component: FormulaireComponent
  },
  {
    path: 'historical',
    component: HistoricalComponent
  },
  {
    path: 'estimate',
    component: EstimateComponent
  },
  {
    path: 'contract',
    component: ContractComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    outlet: 'd',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
