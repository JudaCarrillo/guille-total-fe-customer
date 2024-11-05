import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropShadowComponent } from './drop-shadow.component';

describe('DropShadowComponent', () => {
  let component: DropShadowComponent;
  let fixture: ComponentFixture<DropShadowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropShadowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
