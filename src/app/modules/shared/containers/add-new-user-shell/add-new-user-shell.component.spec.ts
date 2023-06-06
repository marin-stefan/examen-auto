import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewUserShellComponent } from './add-new-user-shell.component';

describe('AddNewUserShellComponent', () => {
  let component: AddNewUserShellComponent;
  let fixture: ComponentFixture<AddNewUserShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewUserShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewUserShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
