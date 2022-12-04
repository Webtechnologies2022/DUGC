import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MintsComponent } from './mints.component';

describe('MintsComponent', () => {
  let component: MintsComponent;
  let fixture: ComponentFixture<MintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
