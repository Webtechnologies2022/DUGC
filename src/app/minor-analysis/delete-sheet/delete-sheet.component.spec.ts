import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSheetComponent } from './delete-sheet.component';

describe('DeleteSheetComponent', () => {
  let component: DeleteSheetComponent;
  let fixture: ComponentFixture<DeleteSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
