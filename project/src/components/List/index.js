import React, { useState, useEffect } from 'react';

export default function List() {

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://plato.mrl.ai:8080/contacts", {headers: {API: "rivera"}})
    .then((res) => res.json())
    .then((data) => {
      //console.log("here are the contacts", data);
      setProfile(data);
      //console.log("here are the contacts", profile);
      setLoading(false)
    }, [])
  });

  if(loading == true){
    return (
      <div> <h2 id="top">CONTACT LIST</h2>
  
      </div>
    );
  } else {

    return (
      <div> <h2 id="top">CONTACT LIST</h2>
      {
         profile.contacts.map((value, index) => {
           return <p key={index}>NAME: {value.name} <br />PHONE NUMBER: {value.number}</p>;
         })
       }
      </div>
    );
  }
}
