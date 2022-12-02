import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DugcChairmanComponent } from './dugc-chairman.component';

describe('DugcChairmanComponent', () => {
  let component: DugcChairmanComponent;
  let fixture: ComponentFixture<DugcChairmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DugcChairmanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DugcChairmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
