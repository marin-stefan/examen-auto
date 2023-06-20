import { Component, OnInit } from '@angular/core';

interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-edit-question-form',
  templateUrl: './add-edit-question-form.component.html',
  styleUrls: ['./add-edit-question-form.component.css']
})
export class AddEditQuestionFormComponent implements OnInit {
  public selectedCategory: string;
  public checkedA: boolean = false

  public categories: Category[] = [
    { value: 'CatA', viewValue: 'Categoria A' },
    { value: 'CatB', viewValue: 'Categoria B' },
    { value: 'CatC', viewValue: 'Categoria C' },
    { value: 'CatD', viewValue: 'Categoria D' },
    { value: 'CatE', viewValue: 'Categoria E' },
    { value: 'Cat1315', viewValue: 'Redobândire permis' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
