import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';
import { ExamHomeComponent } from './components/exam-home/exam-home.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ExamHomeComponent
  ],
  imports: [
    CommonModule,
    ExamRoutingModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    ExamHomeComponent
  ]
})
export class ExamModule { }
