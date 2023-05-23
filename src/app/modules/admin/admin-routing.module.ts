import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminHomeComponent } from './components/admin-home/admin-home.component'
import { UsersListShellComponent } from './containers/users-list-shell/users-list-shell.component'
import { QuestionsListShellComponent } from '../shared/containers/questions-list-shell/questions-list-shell.component'
import { AuthGuard } from '../shared/guards/auth-guard.guard'
import { UserRoles } from '../shared/enums/userRolesEnum'

const routes: Routes = [
    {
        path: '', component : AdminHomeComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: "full" },
            { path: 'utilizatori', component: UsersListShellComponent },
            // { path: 'utilizatori/adauga-utilizator', component: xxx },
            // { path: 'utilizatori/editeaza-utilizator/:IdUtilizator', component: xxx },
            { path: 'lista-intrebari', component: QuestionsListShellComponent }
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