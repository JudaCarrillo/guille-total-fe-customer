import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionPastComponent } from './prediction-past.component';

describe('PredictionPastComponent', () => {
  let component: PredictionPastComponent;
  let fixture: ComponentFixture<PredictionPastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PredictionPastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictionPastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
