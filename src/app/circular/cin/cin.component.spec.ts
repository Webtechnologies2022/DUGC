import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinComponent } from './cin.component';

describe('CinComponent', () => {
  let component: CinComponent;
  let fixture: ComponentFixture<CinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
