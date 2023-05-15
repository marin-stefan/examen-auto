import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs'
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { LogoutBtnComponent } from './components/logout-btn/logout-btn.component';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    HomeComponent,
    HeaderComponent,
    LogoutBtnComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    MatIconModule
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    LogoutBtnComponent
  ]
})
export class SharedModule { }
