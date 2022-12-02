import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseWithdrawalMainComponent } from './course-withdrawal-main.component';

describe('CourseWithdrawalMainComponent', () => {
  let component: CourseWithdrawalMainComponent;
  let fixture: ComponentFixture<CourseWithdrawalMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseWithdrawalMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseWithdrawalMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
