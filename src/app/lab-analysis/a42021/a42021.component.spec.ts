import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A42021Component } from './a42021.component';

describe('A42021Component', () => {
  let component: A42021Component;
  let fixture: ComponentFixture<A42021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A42021Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A42021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
