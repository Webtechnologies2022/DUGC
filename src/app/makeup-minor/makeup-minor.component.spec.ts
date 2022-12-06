import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeupMinorComponent } from './makeup-minor.component';

describe('MakeupMinorComponent', () => {
  let component: MakeupMinorComponent;
  let fixture: ComponentFixture<MakeupMinorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeupMinorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeupMinorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
