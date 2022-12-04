import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabAnalysisMainComponent } from './lab-analysis-main.component';

describe('LabAnalysisMainComponent', () => {
  let component: LabAnalysisMainComponent;
  let fixture: ComponentFixture<LabAnalysisMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabAnalysisMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabAnalysisMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
