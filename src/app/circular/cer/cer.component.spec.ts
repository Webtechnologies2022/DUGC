import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerComponent } from './cer.component';

describe('CerComponent', () => {
  let component: CerComponent;
  let fixture: ComponentFixture<CerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
