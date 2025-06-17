import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerVariablesComponent } from './organizer-variables.component';

describe('OrganizerVariablesComponent', () => {
  let component: OrganizerVariablesComponent;
  let fixture: ComponentFixture<OrganizerVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizerVariablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizerVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
