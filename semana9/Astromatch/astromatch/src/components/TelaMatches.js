import React, { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../constants/BASE-URL";
import styled from "styled-components";

const Avatar = styled.img` 


`


const TelaMatches = (props) => {
  const [listaUsuarios, setListaUsuarios] = useState([]);

  useEffect(() => {
    getMatches();
  });

  const getMatches = () => {
    axios
      .get(`${url}/matches`)
      .then((response) => {
        setListaUsuarios(response.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <div>
      {listaUsuarios && listaUsuarios.map((profile) => {
          return (
            <div>
            <Avatar src={profile.photo}/>
               <p>{profile.name}</p>
            </div>
          )
      })}
  </div>;
};

export default TelaMatches;
