import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavbarStyled = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-items: center;
  justify-content: center;
  background-color: #1f2738;

  > ul {
    display: flex;
    gap: 20px;
    list-style: none;
    align-items: center;
    font-size: 20px;
    > li {
      display: inline-block;
      padding: 16px;
      color: white;
      border-radius: 10px;

      :hover {
        cursor: pointer;
        color: #f56f36;
      }
    }
  }
`;

export const Navbar = () => {
  const navigation = useNavigate();

  return (
    <NavbarStyled>
      <ul>
        <li onClick={() => navigation("/")}>HOME</li>
        <li onClick={() => navigation("/pilots")}>PILOTS</li>
        <li onClick={() => navigation("/starships")}>STARSHIPS</li>
      </ul>
    </NavbarStyled>
  );
};
