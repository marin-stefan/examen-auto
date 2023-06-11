import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminHomeComponent } from './components/admin-home/admin-home.component'
import { UsersListShellComponent } from './containers/users-list-shell/users-list-shell.component'
import { QuestionsListShellComponent } from '../shared/containers/questions-list-shell/questions-list-shell.component'
import { AuthGuard } from '../shared/guards/auth-guard.guard'
import { UserRoles } from '../shared/enums/userRolesEnum';
import { AddUserShellComponent } from './containers/add-user-shell/add-user-shell.component';
import { EditUserShellComponent } from '../shared/containers/edit-user-shell/edit-user-shell.component';
import { CanDeactivateGuard } from '../shared/guards/can-deactivate-guard.guard';

const routes: Routes = [
    {
        path: '', component : AdminHomeComponent,
        children: [
            { path: '', redirectTo: 'users', pathMatch: "full" },
            { path: 'users', component: UsersListShellComponent },
            { path: 'user/add-user', component: AddUserShellComponent, canDeactivate: [CanDeactivateGuard] },
            { path: 'user/edit-user/:userId', component: EditUserShellComponent, canDeactivate: [CanDeactivateGuard] },
            { path: 'questions-list', component: QuestionsListShellComponent }
        ],
        canActivate: [AuthGuard],
        data: {roles: [UserRoles.Admin]}
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule { }