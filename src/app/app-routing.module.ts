import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import { ClientBoardComponent } from './client-board/client-board.component';
import { DetailComponent } from './components/detail/detail.component';
import { ListingsComponent } from './components/listings/listings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmailVerifComponent } from './email-verif/email-verif.component';
import { AuthGuard } from './guard/auth.guard';
import { DashGuard } from './guard/dash.guard';
import { LoginGuardGuard } from './guard/login-guard.guard';

import { LoginUserComponent} from './login-user/login-user.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { OpBoardComponent } from './op-board/op-board.component';
import { OwnerBoardComponent } from './owner-board/owner-board.component';
import { SettingsComponent } from './settings/settings.component';
import { Test2Component } from './test2/test2.component';
import { TesttestComponent } from './testtest/testtest.component';
import { UserClaimComponent } from './user-claim/user-claim.component';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},  {path:"login",component:LoginUserComponent,canActivate:[LoginGuardGuard]}, 
  {path:"jareb",component:TesttestComponent},
  {path:"jareb2",component:Test2Component},
  {
    path: 'listings',
    component: ListingsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "users",
    component: ManageUsersComponent, canActivate:[DashGuard]
     
  },
  {path:"opBoard" ,component:OpBoardComponent},
  {path:"ownerBoard" ,component:OwnerBoardComponent},
  {path:"clientBoard" ,component:ClientBoardComponent},
  {path:"adminBoard",component:AdminBoardComponent},
  {path:"email-verif/:email",component:EmailVerifComponent},
  {path:"dashboard",component:DashboardComponent, canActivate:[DashGuard]},
  {
    path:'settings',
    component:SettingsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    outlet: 'd',
  },    {path:"ClaimCustm",component:UserClaimComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
