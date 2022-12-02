import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSheetsComponent } from './upload-sheets.component';

describe('UploadSheetsComponent', () => {
  let component: UploadSheetsComponent;
  let fixture: ComponentFixture<UploadSheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadSheetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
