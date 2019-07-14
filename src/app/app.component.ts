import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as todoActions from './store/actions/index';
import { Todo } from './models/todo.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  todos$: Observable<Todo[]>

  constructor(private store: Store<Todo[]>) {
    this.todos$ = this.store.select('todos');
  }

  addTodo(formData) {
    let content = formData.value.content;
    this.store.dispatch(new todoActions.PostTodo({ content: content, isDone: false }))
    formData.reset();
  }
  toggleStatus(index, isDone, content) {
    this.store.dispatch(new todoActions.ToggleTodo({ index: index + 1, updatedStatus: !isDone, content }))
  }
  delete(index) {
    this.store.dispatch(new todoActions.DeleteTodo(index + 1));
  }
}
