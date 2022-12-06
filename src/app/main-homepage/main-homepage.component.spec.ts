import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHomepageComponent } from './main-homepage.component';

describe('MainHomepageComponent', () => {
  let component: MainHomepageComponent;
  let fixture: ComponentFixture<MainHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
