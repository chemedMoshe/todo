import { useState } from "react";
import Add from "./components/Add";
import List from "./components/List";
import todoModel from "./Models/todoModel";

export default function App() {
  const [todos, setTodos] = useState<todoModel[]>([]);
  return (
    <div className="app">
      <Add />
      <List />
    </div>
  )
}
