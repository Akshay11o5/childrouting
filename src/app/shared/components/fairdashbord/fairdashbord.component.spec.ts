import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairdashbordComponent } from './fairdashbord.component';

describe('FairdashbordComponent', () => {
  let component: FairdashbordComponent;
  let fixture: ComponentFixture<FairdashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairdashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairdashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
