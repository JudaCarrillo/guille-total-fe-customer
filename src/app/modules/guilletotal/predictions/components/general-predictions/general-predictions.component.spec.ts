import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPredictionsComponent  } from './general-predictions.component';

describe('PredictionsComponent', () => {
  let component: GeneralPredictionsComponent;
  let fixture: ComponentFixture<GeneralPredictionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralPredictionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralPredictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
