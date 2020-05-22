import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDashBoardComponent } from './todo-dash-board.component';

describe('TodoDashBoardComponent', () => {
  let component: TodoDashBoardComponent;
  let fixture: ComponentFixture<TodoDashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDashBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
