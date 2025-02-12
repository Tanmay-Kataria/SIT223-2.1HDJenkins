/* eslint-disable no-unused-vars */
import "./App.css";
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <center>
        <h1>Count: {count}</h1>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            marginRight: "10px",
            color: "blue",
            width: "100px",
            height: "50px",
          }}
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{ color: "red", width: "100px", height: "50px" }}
        >
          Decrement
        </button>
      </center>
    </div>
  );
}

function DisplayName() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);
  };

  const handleReset = () => {
    setName("");
    setSubmittedName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>

      <h1>{submittedName && `Hello ${submittedName}!`}</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />  
      <DisplayName />
    </div>
  );
}

export default App;
