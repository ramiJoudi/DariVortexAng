import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBoardComponent } from './client-board.component';

describe('ClientBoardComponent', () => {
  let component: ClientBoardComponent;
  let fixture: ComponentFixture<ClientBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
