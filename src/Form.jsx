import React, { useEffect, useState } from "react";

const Form = ({ todos, settodos, id, setId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    if (id) {
      updatebyid(id);
      setId("");
    } else {
      const obj = {
        id: Math.random(),
        title,
        description,
      };

      settodos([...todos, obj]);
    }
    setId("");
    setTitle("");
    setDescription("");
  }
  useEffect(() => {
    if (id) {
      const updatedData = todos.filter((d) => d.id === id);
      console.log(updatedData[0]);
      setTitle(updatedData[0].title);
      setDescription(updatedData[0].description);
    }
  }, [id]);

  const updatebyid = (id) => {
    const obj = {
      title,
      description,
    };
    settodos((prevData) =>
      prevData.map((todo) => (todo.id === id ? { ...todo, ...obj } : todo))
    );
  };
  return (
    <>
      <div
        className="container my-5 text-center"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={onSubmit}>
          <input
            value={title}
            placeholder="Title"
            className="mx-2"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            value={description}
            placeholder="Description"
            className="mx-2"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />
          {id && <button className="btn btn-warning">Update</button>}
          {!id && <button className="btn btn-warning">Add</button>}
        </form>
      </div>
    </>
  );
};

export default Form;
