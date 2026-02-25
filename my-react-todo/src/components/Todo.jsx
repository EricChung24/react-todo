import { MdDelete, MdEdit } from "react-icons/md";

function Todo({ todo, deleteTodo, toggleComplete, editTodo }) {
  return (
    <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
      <p
        style={{ cursor: "pointer", margin: "0 auto", color: "black" }}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.content}
      </p>
      <div>
        <MdEdit
          style={{ cursor: "pointer", marginRight: "5px" }}
          onClick={() => {
            const newContent = prompt("Edit todo:", todo.content);
            if (newContent) {
              editTodo(todo.id, newContent);
            }
          }}
        />
        <MdDelete
          onClick={() => deleteTodo(todo.id)}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}
export default Todo;
