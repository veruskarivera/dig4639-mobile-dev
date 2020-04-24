import React from "react";
import Profile from "./components/Profile";
import Add from "./components/Add";
import List from "./components/List";
import Remove from "./components/Remove";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div class="center">
        <div class="listContent">
          <List />
          <Add />
          <Profile />
          <Remove />
        </div>
      </div>
    );
  }
}

export default App;
