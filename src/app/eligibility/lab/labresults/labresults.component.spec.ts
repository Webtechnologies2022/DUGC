import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabresultsComponent } from './labresults.component';

describe('LabresultsComponent', () => {
  let component: LabresultsComponent;
  let fixture: ComponentFixture<LabresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabresultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
