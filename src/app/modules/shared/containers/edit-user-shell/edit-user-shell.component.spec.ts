import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserShellComponent } from './edit-user-shell.component';

describe('EditUserShellComponent', () => {
  let component: EditUserShellComponent;
  let fixture: ComponentFixture<EditUserShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUserShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
