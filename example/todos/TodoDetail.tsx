
import React, { PureComponent } from 'react';
import {Autowired, Observer, RoutingService} from '../../src';
import { TodoService } from './TodoService';

@Observer([TodoService])
export class TodoDetail extends PureComponent{
  todo = Autowired(TodoService, this);
  router = Autowired(RoutingService, this);

  render(){
    const todo = this.todo.currentTodo;
    return <div className="todo-page-container">
      <div className="todo-wrapper">
        {todo &&  <div className="todo-list">
           <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <div className="todo-content">
              <a href="#" className="title" onClick={(e) => {
                e.preventDefault();
                this.todo.completeTodo(todo);
              }}>{todo.message}</a>
              <a href="#" className="subtitle" onClick={(e) => {
                e.preventDefault();
              }}>{todo.dueDate}</a>
            </div>
            <div className="todo-actions">
              <div className="close" onClick={() => {
                this.todo.deleteTodo(todo);
                this.router.rewind()
              }}><span/><span/>
              </div>
            </div>
          </div>
        </div>}
      </div>
    </div>
  }
}

