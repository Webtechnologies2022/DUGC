import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DugcRegisterComponent } from './dugc-register.component';

describe('DugcRegisterComponent', () => {
  let component: DugcRegisterComponent;
  let fixture: ComponentFixture<DugcRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DugcRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DugcRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
