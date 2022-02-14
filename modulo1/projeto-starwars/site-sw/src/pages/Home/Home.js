import React from "react";
import { useNavigate } from "react-router-dom";
import { HomePageContainer, ActionButton } from "./styled";

export const HomePage = () => {
  const navigation = useNavigate();

  return (
    <HomePageContainer>
      <ActionButton onClick={() => navigation("/pilots")}>Pilots</ActionButton>
      <ActionButton onClick={() => navigation("/starships")}>
        Starships
      </ActionButton>
    </HomePageContainer>
  );
};
