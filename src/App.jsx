import React, { useState } from "react";
import Form from "./Form";
import Todos from "./Todos";
const App = () => {
  const [todos, settodos] = useState([]);

  const onDelete = (id) => {
    const deletetodo = todos.filter((d) => d.id != id);
    settodos(deletetodo);
  };
  const [id, setId] = useState("");
  console.log(id);

  return (
    <>
      <div className="container">
        <div className="m-5">
          <h1 className="text-center">TODO LIST [crud app] </h1>
        </div>
        <Form todos={todos} settodos={settodos} id={id} setId={setId} />
        <Todos todos={todos} onDelete={onDelete} setId={setId} />
      </div>
    </>
  );
};

export default App;
