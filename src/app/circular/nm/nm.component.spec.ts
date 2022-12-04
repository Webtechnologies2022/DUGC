import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NmComponent } from './nm.component';

describe('NmComponent', () => {
  let component: NmComponent;
  let fixture: ComponentFixture<NmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
