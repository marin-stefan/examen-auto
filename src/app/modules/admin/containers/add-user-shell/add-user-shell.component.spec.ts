import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserShellComponent } from './add-user-shell.component';

describe('AddUserShellComponent', () => {
  let component: AddUserShellComponent;
  let fixture: ComponentFixture<AddUserShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
