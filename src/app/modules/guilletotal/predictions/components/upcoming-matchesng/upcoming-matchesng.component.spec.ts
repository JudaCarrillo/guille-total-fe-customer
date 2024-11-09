import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingMatchesngComponent } from './upcoming-matchesng.component';

describe('UpcomingMatchesngComponent', () => {
  let component: UpcomingMatchesngComponent;
  let fixture: ComponentFixture<UpcomingMatchesngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpcomingMatchesngComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingMatchesngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
