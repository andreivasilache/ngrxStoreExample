import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TodoService {
  URI = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) { }

  postData(data: Todo) {
    return this.http.post(this.URI, { ...data });
  }

  toggleTodoStatus(index: number, status: boolean, content: string) {
    return this.http.put(this.URI + '/' + index, { isDone: status, content: content })
  }

  deleteTodo(index) {
    return this.http.delete(this.URI + '/' + index)
  }
}
