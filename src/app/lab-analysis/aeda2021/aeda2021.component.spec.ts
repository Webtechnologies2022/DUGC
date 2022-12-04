import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aeda2021Component } from './aeda2021.component';

describe('Aeda2021Component', () => {
  let component: Aeda2021Component;
  let fixture: ComponentFixture<Aeda2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aeda2021Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aeda2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
