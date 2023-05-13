import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutesEnum } from './modules/shared/enums/appRoutesEnum';
import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component';
import { LoginComponent } from './modules/auth/components/login/login.component';

const routes: Routes = [
  { path: AppRoutesEnum.Default, redirectTo: 'login', pathMatch: 'full' },
  { path: AppRoutesEnum.Login, component: LoginComponent },
  // { path: AppRoutesEnum.Admin, loadChildren: () => import blabla },
  // { path: AppRoutesEnum.Consumer, loadChildren: () => import blabla },
  { path: AppRoutesEnum.Error404, component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
