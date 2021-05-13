import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerBoardComponent } from './owner-board.component';

describe('OwnerBoardComponent', () => {
  let component: OwnerBoardComponent;
  let fixture: ComponentFixture<OwnerBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
