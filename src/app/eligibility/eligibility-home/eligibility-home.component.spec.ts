import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilityHomeComponent } from './eligibility-home.component';

describe('EligibilityHomeComponent', () => {
  let component: EligibilityHomeComponent;
  let fixture: ComponentFixture<EligibilityHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibilityHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EligibilityHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
