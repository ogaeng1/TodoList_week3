import React from "react";
import "./style.css";

function Todo({todo, onDelete, doneCancelBtn}) {
    return (
        <div className="todo-container">
            <div className="todo-info">
                <h2>{todo.title}</h2>
                <div>{todo.content}</div>
            </div>
            <div className="buttons">
                <button className="del_btn button" onClick={() => onDelete(todo.id)}>삭제하기</button>
                <button className="done_btn button" onClick={() => doneCancelBtn(todo.id)}>
                    {todo.isDone ? "취소" : "완료"}
                </button>
            </div>
        </div>
    )
}

export default Todo;