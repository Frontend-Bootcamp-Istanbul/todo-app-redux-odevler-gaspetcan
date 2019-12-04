import {SET_FILTER, SET_TODOS, ADD_TODO, REMOVE_TODO, CHECKED_TODO} from "../actions/actions";

const rootReducer = function (state = {
    activeFilter: "all",
    todos: []
}, action) {
    switch (action.type) {
        case SET_FILTER:
            return {...state, activeFilter: action.activeFilter};
        case SET_TODOS:
            return {...state, todos: action.todos}
        case ADD_TODO:
            return {...state, todos: state.todos.concat([action.todo])}
        case REMOVE_TODO:
            const newTodos = state.todos.filter((todo) => todo.id !== action.id);
            return {...state,todos: newTodos};
        case CHECKED_TODO:
            const newArr = state.todos.filter((todo) => todo.checked !== todo.checked)
            const removeTodos = newTodos.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }

};

export default rootReducer