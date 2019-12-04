import React from 'react';
import {connect} from "react-redux";
import {setFilter, removeTodo, checkedTodo} from "./actionCreators/actionCreaters";

function Todo(props) {
    const {content, id, checked} = props;
    let itemClass= "todo-item";
    if(checked){
        itemClass += " checked";
    }
    return (
        <div className={itemClass} onClick={() => {props.checkedTodo(id);}}>
            {content}
            <span
                className="remove-todo"
                onClick={(e) => {e.stopPropagation();props.removeTodo(id)}}>X</span>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    removeTodo: (id) => {dispatch(removeTodo(id))},
    checkedTodo: (id) => {dispatch(checkedTodo(id))}
});

export default connect(null, mapDispatchToProps)(Todo);
