import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralAnalysisMatchComponent } from './general-analysis-match.component';

describe('GeneralAnalysisMatchComponent', () => {
  let component: GeneralAnalysisMatchComponent;
  let fixture: ComponentFixture<GeneralAnalysisMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralAnalysisMatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralAnalysisMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
