import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferencesProfileComponent } from './preferences-profile.component';

describe('PreferencesProfileComponent', () => {
  let component: PreferencesProfileComponent;
  let fixture: ComponentFixture<PreferencesProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferencesProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferencesProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
