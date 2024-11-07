import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPredictionComponent } from './detail-prediction.component';

describe('DetailPredictionComponent', () => {
  let component: DetailPredictionComponent;
  let fixture: ComponentFixture<DetailPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailPredictionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
