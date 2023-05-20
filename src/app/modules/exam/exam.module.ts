import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';
import { ExamHomeComponent } from './components/exam-home/exam-home.component';


@NgModule({
  declarations: [
    ExamHomeComponent
  ],
  imports: [
    CommonModule,
    ExamRoutingModule
  ],
  exports: [
    ExamHomeComponent
  ]
})
export class ExamModule { }
