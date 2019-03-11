import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EatinComponent } from './eatin.component';

describe('EatinComponent', () => {
  let component: EatinComponent;
  let fixture: ComponentFixture<EatinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EatinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EatinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
