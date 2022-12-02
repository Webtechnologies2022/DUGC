import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseWidthdrawalReportComponent } from './course-widthdrawal-report.component';

describe('CourseWidthdrawalReportComponent', () => {
  let component: CourseWidthdrawalReportComponent;
  let fixture: ComponentFixture<CourseWidthdrawalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseWidthdrawalReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseWidthdrawalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
