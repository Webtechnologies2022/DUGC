import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bsnp2021Component } from './bsnp2021.component';

describe('Bsnp2021Component', () => {
  let component: Bsnp2021Component;
  let fixture: ComponentFixture<Bsnp2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bsnp2021Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bsnp2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
