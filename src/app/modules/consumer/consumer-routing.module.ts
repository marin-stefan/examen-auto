import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumerHomeComponent } from './components/consumer-home/consumer-home.component';
import { QuestionsListShellComponent } from '../shared/containers/questions-list-shell/questions-list-shell.component';
import { ConsumerStatsComponent } from './containers/consumer-stats/consumer-stats.component';
import { AuthGuard } from '../shared/guards/auth-guard.guard';
import { UserRoles } from '../shared/enums/userRolesEnum';
import { EditUserShellComponent } from '../shared/containers/edit-user-shell/edit-user-shell.component';
import { CanDeactivateGuard } from '../shared/guards/can-deactivate-guard.guard';

const routes: Routes = [
  {
    path: '', component : ConsumerHomeComponent,
    children: [
      { path: '', redirectTo: 'statistics', pathMatch: "full" },
      { path: 'statistics', component: ConsumerStatsComponent },
      { path: 'edit-user/:userId', component: EditUserShellComponent, canDeactivate: [CanDeactivateGuard] },
      { path: 'questions-list', component: QuestionsListShellComponent },
    ],
    canActivate: [AuthGuard],
    data: {roles: [UserRoles.Consumer]}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumerRoutingModule { }
