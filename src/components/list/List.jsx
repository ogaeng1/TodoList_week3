import React from "react";
import "./style.css";
import Todo from "../todo/Todo";

function List({todos, setTodos}) {
    const onDelete = (todoId) => {
        const newTodo = todos.filter((todo) => {
            return todo.id !== todoId;
        });

        setTodos(newTodo);
    };

    const doneCancelBtn = (todoId) => {
        const newTodo = todos.map((todo) => {
            if (todo.id === todoId) {
                return {
                    ...todo, isDone: !todo.isDone,
                }
            }
            else {
                return {...todo}
            }
        })
        setTodos(newTodo);
    }
    return (
        <div className="list-container">
            <h2 className="list-title">진행중..🔥</h2>
            <div className="list-wrap">
                {todos.map((todo) => {
                    if (!todo.isDone) {
                        return (<Todo todo={todo} key={todo.id} setTodos={setTodos} onDelete={onDelete} doneCancelBtn={doneCancelBtn} />);
                    }
                    else {
                        return null;
                    }
                })}
            </div>
            <h2 className="list-title">완료..✔️</h2>
            <div className="list-wrap">
                {todos.map((todo) => {
                    if (todo.isDone) {
                        return (<Todo todo={todo} key={todo.id} setTodos={setTodos} onDelete={onDelete} doneCancelBtn={doneCancelBtn} />);
                    }
                    else {
                        return null;
                    }
                })}
            </div>
        </div>
    )
}

export default List