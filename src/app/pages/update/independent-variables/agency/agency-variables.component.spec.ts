import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyVariablesComponent } from './agency-variables.component';

describe('AgencyVariablesComponent', () => {
  let component: AgencyVariablesComponent;
  let fixture: ComponentFixture<AgencyVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyVariablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
