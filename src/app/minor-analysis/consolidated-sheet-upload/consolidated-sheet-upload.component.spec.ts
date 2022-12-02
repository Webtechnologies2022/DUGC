import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidatedSheetUploadComponent } from './consolidated-sheet-upload.component';

describe('ConsolidatedSheetUploadComponent', () => {
  let component: ConsolidatedSheetUploadComponent;
  let fixture: ComponentFixture<ConsolidatedSheetUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsolidatedSheetUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsolidatedSheetUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
