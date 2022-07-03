import React, { useState } from "react";
import PostsList from "./components/PostsList";
import UsersList from "./components/UsersList";
import "./styles.css";

function App() {

  const [toggle, setToggle] = useState(false);

  return (
    <div className="main--app">
      <button onClick={() => setToggle(!toggle)}>Toggle Posts/Users</button>
      {
        toggle
        ? <UsersList />
        : <PostsList />
      }
    </div>
  );
}

export default App;