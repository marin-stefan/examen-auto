import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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

  public answerSelections = {
    A: 'isFirstAnswerSelected',
    B: 'isSecondAnswerSelected',
    C: 'isThirdAnswerSelected'
  };

  public answerable: boolean = true;

  @Input() info: QuestionModel;
  @Input() index: number;
  @Input() listMode: boolean;
  @Output() selectedAnswerEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(value: string) {
    this.selectedAnswerEvent.emit(value);
  }

  private populateCorrectAnswers(value: string): void {

    if (value !== this.info.correct) {
      const selectedKey = this.answerSelections[value] + 'Wrong';
      this[selectedKey] = true;
    }
  
    this.answerable = false;
    const correctKey = this.answerSelections[this.info.correct];
    this[correctKey] = true;
  };


  selectAnswer(option: string): void {
    if (this.listMode === true) {
      if (this.answerable){
        this.populateCorrectAnswers(option);
      }
      return
    };
    
    const selectedOption = this.answerSelections[option];
    
    if (selectedOption) {
      this[selectedOption] = !this[selectedOption];
    
      for (const key in this.answerSelections) {
        if (key !== option && this[this.answerSelections[key]]) {
          this[this.answerSelections[key]] = false;
        }
      }
    }
  };

  cancelAnswer(): void {
    for (const key in this.answerSelections) {
      const answerKey = this.answerSelections[key];
      this[answerKey] = false;
    }
  };

}
