import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adiv2022Component } from './adiv2022.component';

describe('Adiv2022Component', () => {
  let component: Adiv2022Component;
  let fixture: ComponentFixture<Adiv2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Adiv2022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adiv2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
