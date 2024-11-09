import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPastPredictionsComponent } from './general-past-predictions.component';

describe('GeneralPastPredictionsComponent', () => {
  let component: GeneralPastPredictionsComponent;
  let fixture: ComponentFixture<GeneralPastPredictionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralPastPredictionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralPastPredictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
