import React, { useState, useEffect } from "react";
import axios from "axios";
import {url, headers}  from "./constants/BASE-URL";

const App = (props) => {
  const [profile, setProfile] = useState({});
  const [choice, setChoice] = useState(true);

  useEffect(() => {
    getProfile()
  });

  useEffect(() => {
    postChoice()
  });

  const getProfile = () => {
    axios
    .get(`${url}/person`)
    .then(response => {
      setProfile(response.data.profile);
    })
    .catch(err => {
      console.log(err);
    });
  }
 
const postChoice = () => {
  const body = {
    isMatch: choice
  };
  axios
  .post(`${url}/choose-person`, body, headers)
  .then(response => {
    setChoice(choice)
  })
  .catch(err => {
    console.log(err)
  })
}
 
  const onClickChoiceNo = () => {
    setChoice(false)
  };
  
  const onClickChoiceYes = () => {
    setChoice(true)
  };
  
  return (
    <div>
      <div>
        {profile.map((person) => {
          return (
            
          )

        })}
      </div>
      <button onClick={onClickChoiceNo}>X</button>
      <button onClick={onClickChoiceYes}>Yes</button>

    </div>

  ) 
};

export default App;
