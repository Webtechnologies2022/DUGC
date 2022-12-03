import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndsemAnalysisMainComponent } from './endsem-analysis-main.component';

describe('EndsemAnalysisMainComponent', () => {
  let component: EndsemAnalysisMainComponent;
  let fixture: ComponentFixture<EndsemAnalysisMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndsemAnalysisMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndsemAnalysisMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
