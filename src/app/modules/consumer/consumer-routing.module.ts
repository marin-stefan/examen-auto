import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumerHomeComponent } from './components/consumer-home/consumer-home.component';
import { QuestionsListShellComponent } from '../shared/containers/questions-list-shell/questions-list-shell.component';
import { ConsumerStatsComponent } from './consumer-stats/consumer-stats.component';

const routes: Routes = [
  {
    path: '', component : ConsumerHomeComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: "full" },
      { path: 'statistici', component: ConsumerStatsComponent } ,
      { path: 'lista-intrebari', component: QuestionsListShellComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumerRoutingModule { }
