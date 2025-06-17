import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidanceVariablesComponent } from './guidance-variables.component';

describe('GuidanceVariablesComponent', () => {
  let component: GuidanceVariablesComponent;
  let fixture: ComponentFixture<GuidanceVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuidanceVariablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidanceVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
