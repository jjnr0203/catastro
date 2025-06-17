import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportVariablesComponent } from './transport-variables.component';

describe('TransportVariablesComponent', () => {
  let component: TransportVariablesComponent;
  let fixture: ComponentFixture<TransportVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransportVariablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
