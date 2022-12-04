import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sem8Component } from './sem8.component';

describe('Sem8Component', () => {
  let component: Sem8Component;
  let fixture: ComponentFixture<Sem8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sem8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sem8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
