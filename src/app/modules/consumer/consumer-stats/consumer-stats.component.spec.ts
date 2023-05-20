import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerStatsComponent } from './consumer-stats.component';

describe('ConsumerStatsComponent', () => {
  let component: ConsumerStatsComponent;
  let fixture: ComponentFixture<ConsumerStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumerStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
