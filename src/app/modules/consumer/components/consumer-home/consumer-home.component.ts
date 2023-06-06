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
      icon: 'equalizer',
      route: 'statistics'
    },
    {
      label: 'Lista intrebari',
      icon: 'subject',
      route: 'questions-list'
    },
    {
      label: 'Simulare examen',
      icon: 'airplay',
      route: '/exam'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
