import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { SharedModule } from '../shared/shared.module';
import { UsersListShellComponent } from './containers/users-list-shell/users-list-shell.component';
import { UsersListComponent } from './components/users-list/users-list.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    UsersListShellComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
