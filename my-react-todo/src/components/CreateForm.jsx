import { useState } from "react";

function CreateForm({ addTodo }) {
  const [content, setContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() === "") {
      alert("請輸入代辦事項");
      return;
    }
    addTodo(content);
    setContent("");
  };
  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="輸入代辦事項"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button className="btn" type="submit">
        新增
      </button>
    </form>
  );
}
export default CreateForm;
