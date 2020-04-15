import React from 'react';

class ContactsList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {contacts: []};

  }

  componentDidMount() {

    fetch("http://plato.mrl.ai:8080/contacts", {headers: {API: "rivera"}})
    .then((res) => res.json())
    .then((data, ) => {
        console.log(data)
      this.setState({contacts: data.contacts});
    });

  }

  render() {
    return (
      <div> <h2>C O N T A C T   L I ST </h2>
       {
         this.state.contacts.map((value, index) => {
           return <p key={index}>{value.name} , {value.number}</p>;
         })
       }
      </div>
    );
  }
}

export default ContactsList;