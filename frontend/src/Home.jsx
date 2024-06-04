import React, { useEffect, useState } from "react";
import Create from "./Create";

const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    

  }, [])
  return (
    <>
      <div className="container d-flex justify-content-between flex-column align-items-center gap-2 pt-5">
        <h1>To do list</h1>
        <Create />
        {todos.length == 0 ? (
          <div>
            <h2>No record</h2>
          </div>
        ) : (
          todos.map((todo) => <div>{todo}</div>)``
        )}
      </div>
    </>
  );
};

export default Home;
