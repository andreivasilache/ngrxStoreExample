import * as todoActions from '../actions/index';
import { Todo } from '../../models/todo.model'

interface AppState {
    todos: Todo[]
}

const initialState: AppState = {
    todos: [
        {
            content: 'asdas',
            isDone: false
        }
    ]
}

export function todoReducer(state = initialState, action: todoActions.ALL) {

    switch (action.type) {

        case todoActions.GET_TODO:
            return state;

        case todoActions.POST_TODO_SUCCESS:
            let todos = state.todos;
            todos.push(action.payload);
            return {
                ...state,
                todos: todos
            }
        case todoActions.TOGGLE_TODO_SUCCESS:
            let todosToggle = state.todos;
            let index = action.payload.index;
            todosToggle[index - 1].isDone = action.payload.updatedStatus;

            return {
                ...state,
                todos: todosToggle
            }

        case todoActions.DELETE_TODO_SUCESS:
            let todosDelete = state.todos;
            todosDelete.splice(action.payload - 1, 1);

            return {
                ...state,
                todos: todosDelete
            }


        case todoActions.OPERATION_FAILED:
            console.log("Operation failed!")
            return state

        default:
            return state;
    }
}