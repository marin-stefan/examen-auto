import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { SharedModule } from '../shared/shared.module';
import { UsersListShellComponent } from './containers/users-list-shell/users-list-shell.component';
import { AddUserShellComponent } from './containers/add-user-shell/add-user-shell.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AdminHomeComponent,
    UsersListShellComponent,
    AddUserShellComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTableModule

  ]
})
export class AdminModule { }
