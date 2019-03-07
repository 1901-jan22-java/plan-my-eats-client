import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EatInComponent } from './eat-in.component';

describe('EatinComponent', () => {
  let component: EatInComponent;
  let fixture: ComponentFixture<EatInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EatInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EatInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
