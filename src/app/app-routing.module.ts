import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { AppComponent } from './app.component';
import { ListingsComponent } from './components/listings/listings.component';

const routes: Routes = [
  {
    path: 'listings',
    component: ListingsComponent,
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    outlet: 'detail',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
