import React from "react";
import Card from "../Card";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: this.props.data.map((v, i) => {
        v.id = i;
        return v;
      })
    };
  }

  async getServerData() {
    fetch("https://api.weather.gov/gridpoints/MLB/25,68/forecast")
      .then(res => res.json())
      .then(result => {
        console.log(result.properties.periods);
        this.setState({ cards: result.properties.periods });
      });
  }

  render() {
    console.log(this.state.cards);
    return this.state.cards.map((v, i) => (
      <Card
        key={v.id}
        clickMe={() => this.clickMe(v.id)}
        id={v.id}
        name={v.name}
        temperature={v.temperature}
        temperatureUnit={v.temperatureUnit}
        detailedForecast={v.detailedForecast}
      ></Card>
    ));
  }
  componentDidMount() {
    this.getServerData();
  }
}

export default Weather;
