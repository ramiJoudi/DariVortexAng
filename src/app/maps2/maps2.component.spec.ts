import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Maps2Component } from './maps2.component';

describe('Maps2Component', () => {
  let component: Maps2Component;
  let fixture: ComponentFixture<Maps2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Maps2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Maps2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
