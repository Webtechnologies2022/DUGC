import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A32020Component } from './a32020.component';

describe('A32020Component', () => {
  let component: A32020Component;
  let fixture: ComponentFixture<A32020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A32020Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A32020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
