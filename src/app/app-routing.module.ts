import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { ListingsComponent } from './components/listings/listings.component';
import {FormulaireComponent} from './formulaire/formulaire.component';

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
