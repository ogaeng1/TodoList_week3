import React, {useState} from "react";
import "./style.css"

let id_num = 1;
function Form({setTodos, todos}) {
    const todoContent = {
        id: 0,
        title: "",
        content: "",
        isDone: false,
    };
    const [todo, setTodo] = useState(todoContent);
    const onChange = (event) => {
        const {name, value} = event.target;
        setTodo({...todo, [name]:value});
    }

    const onClick = (event) => {
        event.preventDefault();
        if (todo.title.trim()==="" || todo.content.trim()=== "")
            return;
        setTodos([...todos, {...todo, id: id_num}]);
        setTodo(todoContent);
        id_num++;
    }

    return (
        <form className="input_form">
            <label>제목</label>
            <input type="text" name="title" value={todo.title} onChange={onChange}></input>
            <label>내용</label>
            <input type="text" name="content" value={todo.content} onChange={onChange}></input>
            <button className="add-btn" onClick={onClick}>추가하기</button>
        </form>
    )
}
export default Form