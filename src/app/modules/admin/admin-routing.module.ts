import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminHomeComponent } from './components/admin-home/admin-home.component'

const routes: Routes = [
    {
        path: '', component : AdminHomeComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: "full" },
            // { path: 'users', component: UsersList }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule { }