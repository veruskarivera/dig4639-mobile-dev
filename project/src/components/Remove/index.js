import React from "react";
const HEADERS = {
  Method: "GET",
  headers: {
    API: "rivera",
    "Content-Type": "application/json",
    Accept: "application/json"
  }
};
class Remove extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      numberToBeDeleted: ""
    };
  }

  delete = () => {
    let newHeader = {
      ...HEADERS,
      method: "POST",
      body: JSON.stringify({
        position: this.state.numberToBeDeleted
      })
    };
   //console.log("this is the header", newHeader);
    window.fetch("http://plato.mrl.ai:8080/contacts/remove", newHeader)
      .then(res => res.json())
      //.then(console.log)
      .then(() => this.setState({ numberToBeDeleted: "" }))
  };

  pageRefresh() {
    window.location.reload();
  }

  submitted = m => {
    m.preventDefault();
    this.delete()

  }
  
  render() {
    return (
      <div>
        <h2> REMOVE FROM LIST</h2>

        <form onSubmit={
          this.submitted
          }>
          <label>TYPE CONTACT'S POSITION TO DELETE</label>
          <br />
          <input
            type="text"
            id="position"
            onChange={evt =>
              this.setState({ numberToBeDeleted: evt.target.value }) 
            }
            value={this.state.numberToBeDeleted}
          />
          <br />
          <button type="submit">SUBMIT</button>
          <br />
        </form>
      </div>
    );
  }
}

export default Remove;
