import React, { useState, useEffect } from "react";
import axios from "axios";
import { url, headers } from "./constants/BASE-URL";
import TelaMatches from "./components/TelaMatches";
import ProfileCard from "./components/ProfileCard";

const App = (props) => {
  const [profile, setProfile] = useState({});
  const [choice, setChoice] = useState(true);

  useEffect(() => {
    getProfile();
  }, []);

  // useEffect(() => {
  //   postChoice();
  // });

  const getProfile = () => {
    axios
      .get(`${url}/person`)
      .then((response) => {
        setProfile(response.data.profile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postChoice = () => {
    const body = {
      id: profile.id,
      choice: choice,
    };
    axios.post(`${url}/choose-person`, body, headers).then((response) => {
      console.log("RESPONSE DO CHOICE", response);
      setChoice(choice);
    });
    getProfile().catch((err) => {
      console.log(err);
    });
  };

  const onClickChoiceNo = () => {
    postChoice(false);
  };

  const onClickChoiceYes = () => {
    postChoice(true);
  };

  return (
    <div>
      <ProfileCard profile={profile} />
      <TelaMatches/>
      <button onClick={onClickChoiceNo}>X</button>
      <button onClick={onClickChoiceYes}>Yes</button>

    </div>
  );
};

export default App;
