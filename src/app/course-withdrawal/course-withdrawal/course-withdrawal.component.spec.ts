import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseWithdrawalComponent } from './course-withdrawal.component';

describe('CourseWithdrawalComponent', () => {
  let component: CourseWithdrawalComponent;
  let fixture: ComponentFixture<CourseWithdrawalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseWithdrawalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseWithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
