import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularComponent } from './circular.component';

describe('CircularComponent', () => {
  let component: CircularComponent;
  let fixture: ComponentFixture<CircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
