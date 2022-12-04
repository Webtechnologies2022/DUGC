import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aml2021Component } from './aml2021.component';

describe('Aml2021Component', () => {
  let component: Aml2021Component;
  let fixture: ComponentFixture<Aml2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aml2021Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aml2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
