import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DugcComponent } from './dugc.component';

describe('DugcComponent', () => {
  let component: DugcComponent;
  let fixture: ComponentFixture<DugcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DugcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DugcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
