import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultatieFormComponent } from './consultatie-form.component';

describe('ConsultatieFormComponent', () => {
  let component: ConsultatieFormComponent;
  let fixture: ComponentFixture<ConsultatieFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultatieFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultatieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
