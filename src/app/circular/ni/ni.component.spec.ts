import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiComponent } from './ni.component';

describe('NiComponent', () => {
  let component: NiComponent;
  let fixture: ComponentFixture<NiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
