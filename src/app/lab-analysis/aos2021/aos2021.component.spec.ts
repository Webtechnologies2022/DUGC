import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aos2021Component } from './aos2021.component';

describe('Aos2021Component', () => {
  let component: Aos2021Component;
  let fixture: ComponentFixture<Aos2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aos2021Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aos2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
