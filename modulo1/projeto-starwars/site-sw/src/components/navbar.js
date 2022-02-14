import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavbarStyled = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-items: center;
  justify-content: center;

  > ul {
    display: flex;
    gap: 20px;
    list-style: none;
    align-items: center;
   

    > li {
      display: inline-block;
      padding: 16px;
      border: 1px solid white;
      color: white;
      border-radius: 10px;
      background-color: blueviolet;
      :hover {
        cursor: pointer;
        color: orange;
      }
    }
  }
`;

export const Navbar = () => {
  const navigation = useNavigate();

  return (
    <NavbarStyled>
      <ul>
        <li onClick={() => navigation("/")}>Home</li>
        <li onClick={() => navigation("/pilots")}>Pilots</li>
        <li onClick={() => navigation("/starships")}>Starships</li>
      </ul>
    </NavbarStyled>
  );
};
