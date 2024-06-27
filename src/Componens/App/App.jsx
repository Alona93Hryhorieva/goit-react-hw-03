import { useState, useEffect } from "react";
import InitialList from "../../InitialList.json";

export default function App() {
  const [tasks, setTasks] = useState([InitialList]);

  return (
    <div>
      <Form />
      <Filter />
      <ContactList tasks={tasks} />
    </div>
  );
}
