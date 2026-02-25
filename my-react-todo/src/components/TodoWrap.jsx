import { useState } from "react";
import CreateForm from "./CreateForm.jsx";
import Todo from "./Todo.jsx";
function TodoWrap() {
  const [todos, setTodo] = useState([
    { content: "早上9點小組會議 ", id: Math.random(), isCompleted: false },
    { content: "與組員討論組件,設計稿切版 ", id: Math.random(), isCompleted: false },
    { content: "中午12點與Amy吃午餐", id: Math.random(), isCompleted: false },
    { content: "下午14:00開會 ", id: Math.random(), isCompleted: false },
    { content: "下班與Eric吃晚餐 ", id: Math.random(), isCompleted: false },
  ]);

  const addTodo = (content) => {
    setTodo([...todos, { content, id: Math.random() }]);
  };

  const deleteTodo = (id) => {
    setTodo(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newContent) => {
    setTodo(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, content: newContent };
        }
        return todo;
      }),
    );
  };

  const toggleComplete = (id) => {
    setTodo(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      }),
    );
  };

  return (
    <div className="wrap">
      <h2>代辦事項</h2>
      <CreateForm addTodo={addTodo} />
      {todos.map((todo) => {
        return (
          <Todo
            toggleComplete={toggleComplete}
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        );
      })}
    </div>
  );
}
export default TodoWrap;
