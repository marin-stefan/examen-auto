import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { Observable, Subscription, timer, catchError, map, take } from 'rxjs';
import { SharedService } from 'src/app/modules/shared/services/shared.service';
import { QuestionsListElementComponent } from 'src/app/modules/shared/components/questionlist-list-element-component/questions-list-element.component';
import { ConfirmDialog } from 'src/app/modules/shared/interfaces/confirmDialog.interface';


@Component({
  selector: 'app-exam-home',
  templateUrl: './exam-home.component.html',
  styleUrls: ['./exam-home.component.css']
})
export class ExamHomeComponent implements OnInit, OnDestroy {
  private userId: string;

  public isAnswerSelected: boolean = false;
  public totalQuestions: number = 26;
  // public remainingQuestions: number = 26;
  public correctAnswers: number = 0;
  public wrongAnswers: number = 0;
  public inProgress: boolean = false;
  public examFinished: boolean = false;
  public skippedIndexes: number[] = [];
  public userSelection: string;
  
  public questions$: Observable<any>;
  public questions = [];
  public questionIndexes = []; // this needs to be empty and on init populate depends on questions.length
  public index: number; // this needs to be empty also and populated afetr questionsIndexes

  countDown: Subscription;
  counter = 1800;
  tick = 1000;

  @ViewChild(QuestionsListElementComponent) childComponent!: QuestionsListElementComponent;

  constructor(
    private notificationService: NotificationService,
    private sharedService: SharedService,
  ) { }

  ngOnInit(): void {
    this.userId = sessionStorage.getItem('loggedUserId')
    // populate indexes
    this.populateIndexesToServe();

    this.index = this.questionIndexes[0]
    this.getQuestionsList();
  };

  private populateIndexesToServe(): void {
    for (let i=0; i<26; i++){
      this.questionIndexes.push(i)
    };
  };

  public getQuestionsList(): void { 
    this.sharedService.getAllQuestions()
      .pipe(
        map((questions) => {
          return questions.map((question) => {
            question.answers = JSON.parse(question.answers)
            this.questions.push(question)
            return question
          })
        })
      ).subscribe()
      ,
      catchError(error => this.notificationService.errorNotification(error))

  };

  matchQuestionIndex(index: number): boolean {
    // return true if question indexes match so we display only that question
    return index === this.index
  };

  triggerCancelAnswer(): void {
    this.childComponent.cancelAnswer();
    this.isAnswerSelected = false;
  };

  startExam(): void {
    this.notificationService.warningNotification('Nu puteţi pune pauză, nu îl puteţi opri!', 'Atenţie, examenul are timp limitat la 30 minute')
      .then(() => { 
        this.inProgress = true ;
        this.countDown = timer(0, this.tick).subscribe(() => {
          --this.counter
          if (this.counter === 0) {
            this.finishExam();
            this.stopTimer();
          }
        });
      })
  };

  stopTimer(){
    if(this.countDown) {
      this.countDown.unsubscribe();
      this.inProgress = false;
      this.examFinished = true;
    }
  };
  
  getUserAnswer(newItem: string): void {
    this.userSelection = newItem;
    this.isAnswerSelected = true;
  };
  
  ngOnDestroy() {
    this.countDown = null;
  };

  skipAnswer() {
    // on skip we move first index to last and reassign this.index to the new first index
    this.questionIndexes.push(this.questionIndexes.shift());
    this.index = this.questionIndexes[0];
  };

  sendAnswer() {
    // update counters
    const correctAnswer = this.questions[this.index].correct;
    this.userSelection === correctAnswer ? this.correctAnswers++ : this.wrongAnswers++ ;
    this.isAnswerSelected = false;

    if ( (this.questionIndexes.length > 1) && (this.correctAnswers < 22) && (this.wrongAnswers < 5) ) {
      // on save we remove first index and reassign this.index to the new first index
      this.questionIndexes.shift();
      this.index = this.questionIndexes[0];
      
    } else {
      this.finishExam();
      this.stopTimer();
    }
  }

  private finishExam(): void {
    // save results in DB 
    const correctAnswer = this.questions[this.index].correct;
    this.userSelection === correctAnswer ? this.correctAnswers++ : this.wrongAnswers++ ;
    const userData = {
      totalExams: 1,
      correctAnswers: this.correctAnswers,
      wrongAnswers: this.wrongAnswers
    }

    if (this.correctAnswers > 21) { 
      userData['totalPassedExams'] = 1
    }

    this.sharedService.editUser(this.userId, userData)
      .pipe(take(1))
      .subscribe((response) => {
        if (response.success) {
          console.log("Exam has Finished , results are saved")
        }
      })
  };

  public async canDeactivate(): Promise<boolean> {
    if (this.inProgress) {
      let confirmData: ConfirmDialog = {
        message : 'Sunteţi sigur că doriţi să renunţaţi? '
      }
      return await this.notificationService.confirmDialog(confirmData)
    }

    return true;
  };
  

  

  

}
