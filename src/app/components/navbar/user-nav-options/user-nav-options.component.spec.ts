import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNavOptionsComponent } from './user-nav-options.component';

describe('UserNavOptionsComponent', () => {
  let component: UserNavOptionsComponent;
  let fixture: ComponentFixture<UserNavOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNavOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNavOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
