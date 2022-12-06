import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DugcLoginComponent } from './dugc-login.component';

describe('DugcLoginComponent', () => {
  let component: DugcLoginComponent;
  let fixture: ComponentFixture<DugcLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DugcLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DugcLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
