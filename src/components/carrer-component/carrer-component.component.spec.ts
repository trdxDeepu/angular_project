import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrerComponentComponent } from './carrer-component.component';

describe('CarrerComponentComponent', () => {
  let component: CarrerComponentComponent;
  let fixture: ComponentFixture<CarrerComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrerComponentComponent]
    });
    fixture = TestBed.createComponent(CarrerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
