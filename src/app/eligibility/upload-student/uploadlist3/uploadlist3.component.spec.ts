import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uploadlist3Component } from './uploadlist3.component';

describe('Uploadlist3Component', () => {
  let component: Uploadlist3Component;
  let fixture: ComponentFixture<Uploadlist3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Uploadlist3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uploadlist3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


