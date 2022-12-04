import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asnp2021Component } from './asnp2021.component';

describe('Asnp2021Component', () => {
  let component: Asnp2021Component;
  let fixture: ComponentFixture<Asnp2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Asnp2021Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Asnp2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
