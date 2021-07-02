import React, { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../constants/BASE-URL";
import styled from "styled-components";

const Avatar = styled.img`
  width: 20px;
  height: 20px;
`;

const MatchesScreen = (props) => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = () => {
    axios
      .get(`${url}/matches`)
      .then((response) => {
        console.log("MATCHES", response);
        setMatches(response.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <div>
        
        </div>
        {matches &&
          matches.map((profile) => {
            console.log(profile)
            return (
              <div>
                {" "}
                <Avatar
                  src={profile ? profile.photo : "Sem foto"}
                />
                <p>{profile ? profile.name : "Sem nome"}</p>
              </div>
            );
          })}
      </div>

    </div>
  );
};

export default MatchesScreen;
