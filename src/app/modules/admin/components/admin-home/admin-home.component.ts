import { Component, OnInit } from '@angular/core';
import { TabItem } from 'src/app/modules/shared/interfaces/tabItem';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  public tabs: TabItem[] = [
    {
      label: 'Utilizatori',
      icon: 'search',
      route: 'utilizatori'
    },
    {
      label: 'Lista intrebari',
      icon: 'search',
      route: 'lista-intrebari'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
