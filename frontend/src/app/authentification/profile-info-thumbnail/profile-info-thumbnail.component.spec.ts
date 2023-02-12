import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfoThumbnailComponent } from './profile-info-thumbnail.component';

describe('ProfileInfoThumbnailComponent', () => {
  let component: ProfileInfoThumbnailComponent;
  let fixture: ComponentFixture<ProfileInfoThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileInfoThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
