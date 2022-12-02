import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorComponent } from './coordinator.component';

describe('CoordinatorComponent', () => {
  let component: CoordinatorComponent;
  let fixture: ComponentFixture<CoordinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
