import React from "react";
import "./App.css";
import Weather from "./component/Weather/index.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {list: [] };
  }

  render() {
    return <Weather data={this.state.list}></Weather>;
  }
}

export default App;
