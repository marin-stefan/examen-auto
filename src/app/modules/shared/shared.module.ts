import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs'
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { LogOutBtnComponent } from './components/logout-btn/logout-btn.component';
import { QuestionsListShellComponent } from './containers/questions-list-shell/questions-list-shell.component';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { EditUserShellComponent } from './containers/edit-user-shell/edit-user-shell.component';
import { AddEditUserFormComponent } from './components/add-edit-user-form/add-edit-user-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    HomeComponent,
    HeaderComponent,
    LogOutBtnComponent,
    QuestionsListShellComponent,
    QuestionsListComponent,
    EditUserShellComponent,
    AddEditUserFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    LogOutBtnComponent,
    QuestionsListShellComponent,
    QuestionsListComponent,
    AddEditUserFormComponent
  ]
})
export class SharedModule { }
