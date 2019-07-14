import { Action } from '@ngrx/store';
import { Todo } from '../../models/todo.model'


export const GET_TODO = '[TODO] GET';

export const POST_TODO = '[TODO] POST'
export const POST_TODO_SUCCESS = '[TODO] POST SUCCESS'

export const DELETE_TODO = '[TODO] DELETE';
export const DELETE_TODO_SUCESS = '[TODO] DELETE SUCCESS';

export const TOGGLE_TODO = '[TODO] TOGGLE';
export const TOGGLE_TODO_SUCCESS = '[TODO] TOGGLE SUCCESS';

export const OPERATION_FAILED = '[TODO] OPERATION FAILED';


export class GetTodo implements Action {
    readonly type = GET_TODO;
}

export class PostTodo implements Action {
    readonly type = POST_TODO;
    constructor(public payload: Todo) { };
}

export class PostTodoSucess implements Action {
    readonly type = POST_TODO_SUCCESS;
    constructor(public payload: Todo) { }
}

export class DeleteTodo implements Action {
    readonly type = DELETE_TODO;
    constructor(public payload: number) { }
}

export class DeleteTodoSuccess implements Action {
    readonly type = DELETE_TODO_SUCESS;
    constructor(public payload: number) { }
}

export class ToggleTodo implements Action {
    readonly type = TOGGLE_TODO;
    constructor(public payload: { index: number, updatedStatus: boolean, content: string }) { }
}

export class ToggleTodoSuccess implements Action {
    readonly type = TOGGLE_TODO_SUCCESS;
    constructor(public payload: { index: number, updatedStatus: boolean, content: string }) { }
}


export class OperaionFailed implements Action {
    readonly type = OPERATION_FAILED;
}


export type ALL = GetTodo | PostTodo | PostTodoSucess | DeleteTodo | DeleteTodoSuccess | ToggleTodo | ToggleTodoSuccess | OperaionFailed;
