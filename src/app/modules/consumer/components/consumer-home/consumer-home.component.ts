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
      route: 'statistica-personala'
    },
    {
      label: 'Lista intrebari',
      icon: 'search',
      route: 'lista-intrebari'
    },
    {
      label: 'Simulare examen',
      icon: 'search',
      route: '/exam'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
