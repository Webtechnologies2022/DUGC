import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Upload5Component } from './upload5.component';

describe('Upload5Component', () => {
  let component: Upload5Component;
  let fixture: ComponentFixture<Upload5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Upload5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Upload5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
