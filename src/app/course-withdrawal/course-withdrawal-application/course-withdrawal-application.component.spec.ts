import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseWithdrawalApplicationComponent } from './course-withdrawal-application.component';

describe('CourseWithdrawalApplicationComponent', () => {
  let component: CourseWithdrawalApplicationComponent;
  let fixture: ComponentFixture<CourseWithdrawalApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseWithdrawalApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseWithdrawalApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
