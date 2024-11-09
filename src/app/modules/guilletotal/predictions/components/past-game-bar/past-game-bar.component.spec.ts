import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastGameBarComponent } from './past-game-bar.component';

describe('PastGameBarComponent', () => {
  let component: PastGameBarComponent;
  let fixture: ComponentFixture<PastGameBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PastGameBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastGameBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
