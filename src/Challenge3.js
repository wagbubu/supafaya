import { useState } from "react";

export default function Challenge3() {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    const newTodoList = [...todoList];
    newTodoList.push(task);
    setTodoList(newTodoList);
    setTask("");
  };
  return (
    <div>
      <h1>3. Add to a list</h1>
      <input onChange={(e) => setTask(e.target.value)} value={task} />
      <button onClick={addTodo}>Add Task</button>
      <ul style={{ padding: 0 }}>
        {todoList?.map((task, i) => (
          <li
            style={{
              listStyleType: "none",
              listStylePosition: "outside",
              textAlign: "center",
            }}
            key={`${task}-${i}`}
          >
            <p>{task}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
