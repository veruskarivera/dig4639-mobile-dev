import React, { useState, useEffect } from 'react';


export default function Profile () {

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    window.fetch("http://plato.mrl.ai:8080/profile", {headers: {API: "rivera"}})
    .then((res) => res.json())
    .then((data) => {
        //console.log("here is the data", data)
      setProfile(data);
    })
  });

    return (
      <div> 
        <h2>NUMBER OF CONTACTS IN LIST:</h2>
         <h1> {profile.count}</h1>
      </div>
    )
}









































/*import React from 'react';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {profile: []};
  }

  componentDidMount() {
    fetch("http://plato.mrl.ai:8080/profile", {headers: {API: "rivera"}})
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
      this.setState({profile:[data]});
    });
  }

  render() {
    return (
      <div> 
        <h2>NUMBER OF CONTACTS IN LIST:</h2>
        { 
        this.state.profile.map((value, index) => {
          return <h1 key={index}> {value.count}</h1>
        })
       }
      </div>
    );
  }
}

export default Profile;*/