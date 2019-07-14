import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as TodoActions from "../actions/index"
import { TodoService } from 'src/app/services/todo.service';
import { of } from 'rxjs';


@Injectable()
export class DbEffects {
    @Effect()
    $postAction = this.actions$.pipe(
        ofType<TodoActions.PostTodo>(TodoActions.POST_TODO),
        switchMap((action) => {
            return this.todoService.postData(action.payload).pipe(
                map(todo => new TodoActions.PostTodoSucess(action.payload)),
                catchError(error => of(new TodoActions.OperaionFailed()))
            )
        })
    )

    @Effect()
    $toggleStatusAction = this.actions$.pipe(
        ofType<TodoActions.ToggleTodo>(TodoActions.TOGGLE_TODO),
        switchMap((action) => {
            return this.todoService.toggleTodoStatus(action.payload.index, action.payload.updatedStatus, action.payload.content).pipe(
                map(newStatus => new TodoActions.ToggleTodoSuccess({
                    index: action.payload.index,
                    updatedStatus: action.payload.updatedStatus,
                    content: action.payload.content
                })),
                catchError(error => of(new TodoActions.OperaionFailed()))
            )
        })
    )
    @Effect()
    $deleteStatusAction = this.actions$.pipe(
        ofType<TodoActions.DeleteTodo>(TodoActions.DELETE_TODO),
        switchMap((action) => {
            return this.todoService.deleteTodo(action.payload).pipe(
                map(deletedItem => new TodoActions.DeleteTodoSuccess(action.payload)),
                catchError(error => of(new TodoActions.OperaionFailed()))
            )
        })
    )

    constructor(private actions$: Actions, private todoService: TodoService) { }
}
