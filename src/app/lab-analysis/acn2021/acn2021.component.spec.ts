import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acn2021Component } from './acn2021.component';

describe('Acn2021Component', () => {
  let component: Acn2021Component;
  let fixture: ComponentFixture<Acn2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acn2021Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acn2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
