import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultistepFormContainerComponent } from './multistep-form-container.component';

describe('MultistepFormContainerComponent', () => {
  let component: MultistepFormContainerComponent;
  let fixture: ComponentFixture<MultistepFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultistepFormContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultistepFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
