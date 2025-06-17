import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttraccionVariablesComponent } from './attraccion-variables.component';

describe('AttraccionVariablesComponent', () => {
  let component: AttraccionVariablesComponent;
  let fixture: ComponentFixture<AttraccionVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttraccionVariablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttraccionVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
