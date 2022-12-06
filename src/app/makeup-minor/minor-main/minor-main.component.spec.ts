import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorMainComponent } from './minor-main.component';

describe('MinorMainComponent', () => {
  let component: MinorMainComponent;
  let fixture: ComponentFixture<MinorMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinorMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
