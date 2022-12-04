import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularMainComponent } from './circular-main.component';

describe('CircularMainComponent', () => {
  let component: CircularMainComponent;
  let fixture: ComponentFixture<CircularMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircularMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircularMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
