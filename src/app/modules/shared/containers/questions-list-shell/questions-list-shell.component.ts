import { Component, OnInit } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { SharedService } from '../../services/shared.service';
import { NotificationService } from '../../services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions-list-shell',
  templateUrl: './questions-list-shell.component.html',
  styleUrls: ['./questions-list-shell.component.css']
})
export class QuestionsListShellComponent implements OnInit {
  public loading: boolean = false;
  public isSelected: boolean = true;
  public questions$: Observable<any>;  

  constructor(
    private sharedService: SharedService,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.getQuestionsList();
  };

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

  selectCategory(): void {
    console.log("select category")
  }

  addQuestion(): void {
    console.log("add quest")
    this.router.navigate(['admin/question-list/add-question'])
  }

}
