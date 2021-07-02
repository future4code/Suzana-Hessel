import React from "react";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 22vw;
  height: 57vh;
  border: 2px solid white;
  border-radius: 15px;
  box-shadow: 5px 5px gray;
  justify-content: center;
  align-items: center;
  margin-top: 20px;


  img {
   display: flex;
    max-width: 90%;
    max-height: 40vh;
    border-radius: 10px;
    margin-top: 20px;
   
  }
`;

const InfosCard = styled.div`
  display: block;
  width: 20vw;
  height: 15vh; 
  text-align: center ;
  margin-bottom: 10px;
`;

const ProfileCard = (props) => {
  const profile = props.profile;

  return (
    <CardsContainer>
      <img src={profile ? profile.photo : "Sem foto"} alt="profile-foto"></img>
      <InfosCard>
        <p>
          {profile ? profile.name : "Sem nome"},
          {profile ? profile.age : "Sem idade"}
        </p>

        <p>{profile ? profile.bio : "Sem bio"}</p>
      </InfosCard>
    </CardsContainer>
  );
};

export default ProfileCard;
