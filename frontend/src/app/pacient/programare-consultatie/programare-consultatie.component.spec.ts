import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramareConsultatieComponent } from './programare-consultatie.component';

describe('ProgramareConsultatieComponent', () => {
  let component: ProgramareConsultatieComponent;
  let fixture: ComponentFixture<ProgramareConsultatieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramareConsultatieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramareConsultatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
