import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bcn2021Component } from './bcn2021.component';

describe('Bcn2021Component', () => {
  let component: Bcn2021Component;
  let fixture: ComponentFixture<Bcn2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bcn2021Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bcn2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
