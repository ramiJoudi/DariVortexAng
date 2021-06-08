import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPWDComponent } from './reset-pwd.component';

describe('ResetPWDComponent', () => {
  let component: ResetPWDComponent;
  let fixture: ComponentFixture<ResetPWDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPWDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPWDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
