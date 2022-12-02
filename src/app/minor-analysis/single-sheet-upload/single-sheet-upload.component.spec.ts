import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSheetUploadComponent } from './single-sheet-upload.component';

describe('SingleSheetUploadComponent', () => {
  let component: SingleSheetUploadComponent;
  let fixture: ComponentFixture<SingleSheetUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleSheetUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleSheetUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
