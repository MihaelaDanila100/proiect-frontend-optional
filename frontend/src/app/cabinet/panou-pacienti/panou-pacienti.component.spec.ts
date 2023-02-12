import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanouPacientiComponent } from './panou-pacienti.component';

describe('PanouPacientiComponent', () => {
  let component: PanouPacientiComponent;
  let fixture: ComponentFixture<PanouPacientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanouPacientiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanouPacientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
