import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminHomeComponent } from './components/admin-home/admin-home.component'
import { UsersListShellComponent } from './containers/users-list-shell/users-list-shell.component'
import { QuestionsListShellComponent } from '../shared/containers/questions-list-shell/questions-list-shell.component'

const routes: Routes = [
    {
        path: '', component : AdminHomeComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: "full" },
            { path: 'utilizatori', component: UsersListShellComponent },
            { path: 'lista-intrebari', component: QuestionsListShellComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule { }