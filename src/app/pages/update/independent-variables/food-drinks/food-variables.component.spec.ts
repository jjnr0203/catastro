import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodVariablesComponent } from './food-variables.component';

describe('FoodVariablesComponent', () => {
  let component: FoodVariablesComponent;
  let fixture: ComponentFixture<FoodVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodVariablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
