import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityVariablesComponent } from './community-variables.component';

describe('CommunityVariablesComponent', () => {
  let component: CommunityVariablesComponent;
  let fixture: ComponentFixture<CommunityVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityVariablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
