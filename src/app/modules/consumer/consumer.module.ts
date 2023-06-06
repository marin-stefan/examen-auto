import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumerRoutingModule } from './consumer-routing.module';
import { ConsumerHomeComponent } from './components/consumer-home/consumer-home.component';
import { SharedModule } from '../shared/shared.module';
import { ConsumerStatsComponent } from './containers/consumer-stats/consumer-stats.component';
import { StatsElementComponent } from './components/stats-element/stats-element.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    ConsumerHomeComponent,
    ConsumerStatsComponent,
    StatsElementComponent,
  ],
  imports: [
    CommonModule,
    ConsumerRoutingModule,
    SharedModule,
    MatProgressSpinnerModule
  ]
})
export class ConsumerModule { }
