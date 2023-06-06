import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutesEnum } from './modules/shared/enums/appRoutesEnum';
import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { ExamHomeComponent } from './modules/exam/components/exam-home/exam-home.component';
import { AddNewUserShellComponent } from './modules/shared/containers/add-new-user-shell/add-new-user-shell.component';

const routes: Routes = [
  { path: AppRoutesEnum.Default, redirectTo: 'login', pathMatch: 'full' },
  { path: AppRoutesEnum.Login, component: LoginComponent },
  { path: AppRoutesEnum.AddUser, component: AddNewUserShellComponent },
  { path: AppRoutesEnum.Admin, loadChildren: () => import ('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: AppRoutesEnum.Consumer, loadChildren: () => import ('./modules/consumer/consumer.module').then(m => m.ConsumerModule) },
  { path: AppRoutesEnum.Exam, component: ExamHomeComponent },
  { path: AppRoutesEnum.Error404, component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
