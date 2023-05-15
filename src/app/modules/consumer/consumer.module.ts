import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumerRoutingModule } from './consumer-routing.module';
import { ConsumerHomeComponent } from './components/consumer-home/consumer-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ConsumerHomeComponent
  ],
  imports: [
    CommonModule,
    ConsumerRoutingModule,
    SharedModule
  ]
})
export class ConsumerModule { }
