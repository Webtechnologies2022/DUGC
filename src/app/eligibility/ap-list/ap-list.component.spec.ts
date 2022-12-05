import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApListComponent } from './ap-list.component';

describe('ApListComponent', () => {
  let component: ApListComponent;
  let fixture: ComponentFixture<ApListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
