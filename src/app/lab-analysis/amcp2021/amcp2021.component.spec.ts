import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Amcp2021Component } from './amcp2021.component';

describe('Amcp2021Component', () => {
  let component: Amcp2021Component;
  let fixture: ComponentFixture<Amcp2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Amcp2021Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Amcp2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
