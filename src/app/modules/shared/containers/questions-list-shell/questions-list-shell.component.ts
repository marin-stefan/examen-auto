import { Component, OnInit } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { QuestionModel } from '../../interfaces/question-model';
import { SharedService } from '../../services/shared.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-questions-list-shell',
  templateUrl: './questions-list-shell.component.html',
  styleUrls: ['./questions-list-shell.component.css']
})
export class QuestionsListShellComponent implements OnInit {
  public loading: boolean = false;
  public questions$: Observable<any>;  

  constructor(
    private sharedService: SharedService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.getQuestionsList();
  }

  public getQuestionsList(): void {
    this.loading = true;

    this.questions$ = this.sharedService.getAllQuestions()
      .pipe(
        map((questions) => {
          this.loading = false
          return questions.map((question) => {
            question.answers = JSON.parse(question.answers)
            return question
          })
        })
      ),
      catchError(error => this.notificationService.errorNotification(error))
  };

}
