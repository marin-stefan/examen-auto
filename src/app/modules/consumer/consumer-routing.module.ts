import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumerHomeComponent } from './components/consumer-home/consumer-home.component';

const routes: Routes = [
  {
    path: '', component : ConsumerHomeComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: "full" },
      // { path: 'statistici', component: StatisticsPage } nush inca ce e default ..cred ca gen statistici
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumerRoutingModule { }
