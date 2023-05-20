import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsListShellComponent } from './questions-list-shell.component';

describe('QuestionsListShellComponent', () => {
  let component: QuestionsListShellComponent;
  let fixture: ComponentFixture<QuestionsListShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsListShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionsListShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
