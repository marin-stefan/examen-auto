import { Component, OnInit } from '@angular/core';
import { TabItem } from 'src/app/modules/shared/interfaces/tabItem';

@Component({
  selector: 'app-consumer-home',
  templateUrl: './consumer-home.component.html',
  styleUrls: ['./consumer-home.component.css']
})
export class ConsumerHomeComponent implements OnInit {
  public tabs: TabItem[] = [
    {
      label: 'Statistici',
      icon: 'search',
      route: 'xxx'
    },
    {
      label: 'Lista intrebari',
      icon: 'search',
      route: 'xxx'
    },
    {
      label: 'Simulare examen',
      icon: 'search',
      route: 'xxx'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
