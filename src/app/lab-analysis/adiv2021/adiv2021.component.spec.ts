import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adiv2021Component } from './adiv2021.component';

describe('Adiv2021Component', () => {
  let component: Adiv2021Component;
  let fixture: ComponentFixture<Adiv2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Adiv2021Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adiv2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
