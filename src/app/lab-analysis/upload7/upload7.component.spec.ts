import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Upload7Component } from './upload7.component';

describe('Upload7Component', () => {
  let component: Upload7Component;
  let fixture: ComponentFixture<Upload7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Upload7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Upload7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
