import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailComponent } from './components/detail/detail.component';
import { ListingsComponent } from './components/listings/listings.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { EmailVerifComponent } from './email-verif/email-verif.component';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import { ClientBoardComponent } from './client-board/client-board.component';
import { OwnerBoardComponent } from './owner-board/owner-board.component';
import { OpBoardComponent } from './op-board/op-board.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { AvatarModule } from 'ngx-avatar';
import { SearchfilterPipe } from './searchfilter.pipe';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {NgxPaginationModule} from 'ngx-pagination';
import { UserClaimComponent } from './user-claim/user-claim.component';
import { TesttestComponent } from './testtest/testtest.component';
import{NgxChartsModule} from '@swimlane/ngx-charts';
import { Test2Component } from './test2/test2.component';
import { ResetPWDComponent } from './reset-pwd/reset-pwd.component';
import { ChangepwdComponent } from './reset-pwd/changepwd/changepwd.component';
 
@NgModule({
  declarations: [AppComponent, DetailComponent, ListingsComponent, SettingsComponent, LoginUserComponent, EmailVerifComponent, AdminBoardComponent, ClientBoardComponent, OwnerBoardComponent, OpBoardComponent, DashboardComponent, ManageUsersComponent, SearchfilterPipe, UserClaimComponent, TesttestComponent, Test2Component, ResetPWDComponent, ChangepwdComponent,   ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule,HttpClientModule,  FormsModule,ReactiveFormsModule,AvatarModule,NgxChartsModule,NgxPaginationModule,BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
