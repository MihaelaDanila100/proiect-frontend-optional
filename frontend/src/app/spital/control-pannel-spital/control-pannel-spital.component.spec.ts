import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPannelSpitalComponent } from './control-pannel-spital.component';

describe('ControlPannelSpitalComponent', () => {
  let component: ControlPannelSpitalComponent;
  let fixture: ComponentFixture<ControlPannelSpitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlPannelSpitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPannelSpitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
