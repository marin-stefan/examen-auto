import { Component, OnInit, Input } from '@angular/core';
import { UserStatsModel } from 'src/app/modules/shared/interfaces/userStats-model';

@Component({
  selector: 'app-stats-element',
  templateUrl: './stats-element.component.html',
  styleUrls: ['./stats-element.component.css']
})
export class StatsElementComponent implements OnInit {

  @Input() info: UserStatsModel;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

  getPercentageColorClass(value: number) {
    
    if (value < 50) {
      return 'red'
    } else if (value >= 50 && value < 80) {
      return 'yellow'
    } else  {
      return 'green'
    }
  };

  public isValueNaN(value: any): boolean {
    return isNaN(value);
  }

}
