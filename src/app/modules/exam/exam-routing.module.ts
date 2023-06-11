import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamHomeComponent } from './components/exam-home/exam-home.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamRoutingModule { }
