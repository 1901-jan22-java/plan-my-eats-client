import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EatOutComponent } from './eat-out.component';

describe('EatoutComponent', () => {
  let component: EatOutComponent;
  let fixture: ComponentFixture<EatOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EatOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EatOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
