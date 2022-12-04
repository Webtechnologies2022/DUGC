import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aoops2021Component } from './aoops2021.component';

describe('Aoops2021Component', () => {
  let component: Aoops2021Component;
  let fixture: ComponentFixture<Aoops2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aoops2021Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aoops2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
