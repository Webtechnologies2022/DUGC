import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A32021Component } from './a32021.component';

describe('A32021Component', () => {
  let component: A32021Component;
  let fixture: ComponentFixture<A32021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A32021Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A32021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
