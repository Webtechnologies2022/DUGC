import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass2021Component } from './ass2021.component';

describe('Ass2021Component', () => {
  let component: Ass2021Component;
  let fixture: ComponentFixture<Ass2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass2021Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ass2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
