import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EatoutComponent } from './eatout.component';

describe('EatoutComponent', () => {
  let component: EatoutComponent;
  let fixture: ComponentFixture<EatoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EatoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EatoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
