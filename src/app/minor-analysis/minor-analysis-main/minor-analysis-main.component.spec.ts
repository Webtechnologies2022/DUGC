import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorAnalysisMainComponent } from './minor-analysis-main.component';

describe('MinorAnalysisMainComponent', () => {
  let component: MinorAnalysisMainComponent;
  let fixture: ComponentFixture<MinorAnalysisMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinorAnalysisMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinorAnalysisMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
