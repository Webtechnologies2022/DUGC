import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsComponent } from './ns.component';

describe('NsComponent', () => {
  let component: NsComponent;
  let fixture: ComponentFixture<NsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
