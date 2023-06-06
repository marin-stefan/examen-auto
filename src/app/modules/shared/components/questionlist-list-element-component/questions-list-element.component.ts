import { Component, OnInit, Input } from '@angular/core';
import { QuestionModel } from '../../interfaces/question-model';

@Component({
  selector: 'app-questions-list-element',
  templateUrl: './questions-list-element.component.html',
  styleUrls: ['./questions-list-element.component.css']
})
export class QuestionsListElementComponent implements OnInit {
  public isFirstAnswerSelected: boolean = false;
  public isSecondAnswerSelected: boolean = false;
  public isThirdAnswerSelected: boolean = false;
  public isFirstAnswerSelectedWrong: boolean = false;
  public isSecondAnswerSelectedWrong: boolean = false;
  public isThirdAnswerSelectedWrong: boolean = false;

  public answerable: boolean = true;

  @Input() info: QuestionModel;
  @Input() index: number;
  @Input() listMode: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  private populateCorrectAnswers(value:string): void {
    
    if (value !== this.info.correct) {
      switch(value) {
        case 'A':
          this.isFirstAnswerSelectedWrong = true;
          break;
        case 'B':
          this.isSecondAnswerSelectedWrong = true;
          break;
        case 'C':
        this.isThirdAnswerSelectedWrong = true;
        break;
      }
    }

    this.answerable = false;

    switch(this.info.correct) {
      case 'A':
        this.isFirstAnswerSelected = true
        break;
      case 'B':
        this.isSecondAnswerSelected = true
        break;
      case 'C':
        this.isThirdAnswerSelected = true
        break;
    }
  }


  selectAnswer(option: string): void {

    if (this.listMode === true) {
      if (this.answerable){
        this.populateCorrectAnswers(option);
      }
      return
    };

    switch(option) {
      case 'A':
        this.isFirstAnswerSelected = !this.isFirstAnswerSelected;

        if (this.isSecondAnswerSelected) {
          this.isSecondAnswerSelected = !this.isSecondAnswerSelected;
        }

        if (this.isThirdAnswerSelected) {
          this.isThirdAnswerSelected = !this.isThirdAnswerSelected
        }

        break;

      case 'B':
        this.isSecondAnswerSelected = !this.isSecondAnswerSelected;

        if (this.isFirstAnswerSelected) {
          this.isFirstAnswerSelected = !this.isFirstAnswerSelected;
        }

        if (this.isThirdAnswerSelected) {
          this.isThirdAnswerSelected = !this.isThirdAnswerSelected
        }

        break;

      case 'C':
        this.isThirdAnswerSelected = !this.isThirdAnswerSelected;

        if (this.isFirstAnswerSelected) {
          this.isFirstAnswerSelected = !this.isFirstAnswerSelected;
        }

        if (this.isSecondAnswerSelected) {
          this.isSecondAnswerSelected = !this.isSecondAnswerSelected
        }

        break;
    } 
  };

  cancelAnswer(): void {
    this.isFirstAnswerSelected = false;
    this.isSecondAnswerSelected = false;
    this.isThirdAnswerSelected = false;
  };

}
