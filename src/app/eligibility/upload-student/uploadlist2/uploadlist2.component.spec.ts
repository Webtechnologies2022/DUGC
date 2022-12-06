import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uploadlist2Component } from './uploadlist2.component';

describe('Uploadlist2Component', () => {
  let component: Uploadlist2Component;
  let fixture: ComponentFixture<Uploadlist2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Uploadlist2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uploadlist2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
