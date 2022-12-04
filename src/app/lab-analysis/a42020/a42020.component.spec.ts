import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A42020Component } from './a42020.component';

describe('A42020Component', () => {
  let component: A42020Component;
  let fixture: ComponentFixture<A42020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A42020Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A42020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
