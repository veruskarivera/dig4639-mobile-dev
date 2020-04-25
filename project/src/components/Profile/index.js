import React, { useState, useEffect } from "react";

export default function Profile(props) {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    setTimeout(
      () => {
        fetch("http://plato.mrl.ai:8080/profile", {
          headers: { API: "rivera" }
        })
          .then(res => res.json())
          .then(data => {
            console.log("here is the data", data);
            setProfile(data);
          });
      },500
    );
  }, [props.timer]);

  return (
    <div>
      <h2>NUMBER OF CONTACTS IN LIST:</h2>
      <h1> {profile.count}</h1>
    </div>
  );
}




















