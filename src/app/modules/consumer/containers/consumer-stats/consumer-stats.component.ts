import { Component, OnInit } from '@angular/core';
import { Observable, map, catchError } from 'rxjs';
import { UserStatsModel } from 'src/app/modules/shared/interfaces/userStats-model';
// import { UserModel } from 'src/app/modules/shared/interfaces/user-model';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { SharedService } from 'src/app/modules/shared/services/shared.service';

@Component({
  selector: 'app-consumer-stats',
  templateUrl: './consumer-stats.component.html',
  styleUrls: ['./consumer-stats.component.css']
})
export class ConsumerStatsComponent implements OnInit {
  public stats$: Observable<UserStatsModel[]>;
  public loading: boolean = false;
  

  constructor(
    private sharedService : SharedService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.getStats();
  }

  getStats(): void {
    const userId = sessionStorage.getItem('loggedUserId');
    this.stats$ = this.sharedService.getUserStats(userId),
      catchError(error => this.notificationService.errorNotification(error))

  }
 



}
