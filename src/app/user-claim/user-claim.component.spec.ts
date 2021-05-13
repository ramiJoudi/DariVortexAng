import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserClaimComponent } from './user-claim.component';

describe('UserClaimComponent', () => {
  let component: UserClaimComponent;
  let fixture: ComponentFixture<UserClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
