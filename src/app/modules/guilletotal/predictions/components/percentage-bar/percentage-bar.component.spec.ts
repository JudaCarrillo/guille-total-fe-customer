import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageBarComponent } from './percentage-bar.component';

describe('PercentageBarComponent', () => {
  let component: PercentageBarComponent;
  let fixture: ComponentFixture<PercentageBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PercentageBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PercentageBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
