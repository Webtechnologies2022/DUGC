import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adiv2020Component } from './adiv2020.component';

describe('Adiv2020Component', () => {
  let component: Adiv2020Component;
  let fixture: ComponentFixture<Adiv2020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Adiv2020Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adiv2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
