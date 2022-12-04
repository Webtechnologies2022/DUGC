import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adsa2021Component } from './adsa2021.component';

describe('Adsa2021Component', () => {
  let component: Adsa2021Component;
  let fixture: ComponentFixture<Adsa2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Adsa2021Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adsa2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
