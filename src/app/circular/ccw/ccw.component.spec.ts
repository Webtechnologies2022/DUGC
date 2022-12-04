import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcwComponent } from './ccw.component';

describe('CcwComponent', () => {
  let component: CcwComponent;
  let fixture: ComponentFixture<CcwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
