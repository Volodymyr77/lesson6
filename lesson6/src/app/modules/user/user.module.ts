import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { UserComponent } from './components/user/user.component';
import {UserService} from "./services/user.service";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '', component: AllUsersComponent, children: [
      {path : ':id', component : UserComponent}
    ]
  }
]

@NgModule({
  declarations: [AllUsersComponent,

    UserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    AllUsersComponent
  ],
  providers: [UserService]
})
export class UserModule { }
