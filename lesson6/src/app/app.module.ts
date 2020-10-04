import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserModule} from "./modules/user/user.module";
import {RouterModule, Routes} from "@angular/router";
import {AllUsersComponent} from "./modules/user/components/all-users/all-users.component";

const routes: Routes = [
  {path : 'users', loadChildren : () => import('./modules/user/user.module').then(m => m.UserModule) },

];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
