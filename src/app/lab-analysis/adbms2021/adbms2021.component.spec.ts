import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adbms2021Component } from './adbms2021.component';

describe('Adbms2021Component', () => {
  let component: Adbms2021Component;
  let fixture: ComponentFixture<Adbms2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Adbms2021Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adbms2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
