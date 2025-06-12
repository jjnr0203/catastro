import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dates111Component } from './dates-1-11.component';

describe('Dates111Component', () => {
  let component: Dates111Component;
  let fixture: ComponentFixture<Dates111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dates111Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dates111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
