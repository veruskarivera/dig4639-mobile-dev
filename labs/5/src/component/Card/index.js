import "./index.css";
import React from "react";

class Card extends React.Component {
  render() {
    return (
      <body>
      <div className="card">
          <h2>{this.props.name}</h2>
          <h2>{this.props.temperature}{this.props.temperatureUnit}</h2>
          <p>{this.props.detailedForecast}</p>
      </div>
      </body>
    );
  }
}
export default Card;
