import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Awt2021Component } from './awt2021.component';

describe('Awt2021Component', () => {
  let component: Awt2021Component;
  let fixture: ComponentFixture<Awt2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Awt2021Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Awt2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
