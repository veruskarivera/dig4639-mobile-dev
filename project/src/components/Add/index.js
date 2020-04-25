import React from "react";
const HEADERS = {
  Method: "GET",
  headers: {
    API: "rivera",
    "Content-Type": "application/json",
    Accept: "application/json"
  }
};

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactName: "",
      contactNumber: ""
    };
  }
  newContact = () => {
    let newHeader = {
      ...HEADERS,
      method: "POST",
      body: JSON.stringify({
        name: this.state.contactName,
        number: this.state.contactNumber
      })
    };
    fetch("http://plato.mrl.ai:8080/contacts/add", newHeader)
      .then(res => res.json())
      .then(console.log)
      .then(()=>this.setState({contactName:" "}))
      .then(()=>this.setState({contactNumber:" "}));
  };

  submitted = m => {
    m.preventDefault();
    this.newContact();
  };

  render() {
    return (
      <div>
        <h2>ADD NEW CONTACT</h2>
        <form onSubmit={this.submitted}>
          <label htmlFor="name">NAME:</label>
          <br />
          <input
            type="text"
            id="name"
            onChange={evt => this.setState({ contactName: evt.target.value })}
            value={this.state.contactName}
          />
          <br />
          <label htmlFor="name">PHONE NUMBER:</label>
          <br />
          <input
            type="text"
            id="number"
            onChange={evt => this.setState({ contactNumber: evt.target.value })}
            value={this.state.contactNumber}
          />
          <br />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    );
  }
}
export default Add;
