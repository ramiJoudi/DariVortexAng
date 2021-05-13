import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpBoardComponent } from './op-board.component';

describe('OpBoardComponent', () => {
  let component: OpBoardComponent;
  let fixture: ComponentFixture<OpBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
