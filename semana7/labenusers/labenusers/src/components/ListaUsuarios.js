import React from "react";
import axios from "axios";
import styled from "styled-components";


const UserContainer= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 250px;
  left: 400px;
  width: 50%;
  height: auto;
 

  h2 {
    position: relative;
    top: 50px;
    right: 5px;
    color: orange;
  }
`;

const ButtonDelete = styled.span`
  position: relative;
  right: 30px;  
  color: white;
  background-color: red;
  width: 50px;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
`;

const UsuarioCadastrado = styled.div`
  display: flex;
  width: 50%;
  position: relative;
  top: 100px;
  justify-content: space-between;
  padding: 2px;
  background-color: crimson;
  color: white;
  border: 1px solid white;
  border-radius: 4px;
  

  li {
    padding-left: 25px;
  }

`;

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const headers = {
  headers: {
    Authorization: "suzana-hessel-molina",
  }
};

class ListaUsuarios extends React.Component {
  state = {
    listaUsuarios: [],
    deleteUsuario: [],
  };

  componentDidMount() {
    this.pegarListaUsuarios();
  }

  pegarListaUsuarios = () => {
    axios
      .get(url, headers)
      .then((res) => {
        console.log(res)
        this.setState({ listaUsuarios: res.data });
      })
      .catch((err) => {
        console.log(err.data.response);
      });
  };

  DeleteUsuario = (id) => {
    axios
      .delete(`${url}/${id}`, headers)
      .then((res) => {
        this.state.listaUsuarios.filter((userId) => {
            return userId.id
        })
        alert("Usuário deletado com sucesso!");
      })
      .catch((err) => {
        alert("Opss!");
      });
  };


  render() {
    return (
      <UserContainer>
        <h2>Usuários Cadastrados</h2>
        {this.state.listaUsuarios.map((usuario) => {
          return (
            <UsuarioCadastrado>
              <li key={usuario.id}>
                {usuario.name} 
              </li>
              <ButtonDelete onClick={() => this.DeleteUsuario(usuario.id)}>
                Delete
              </ButtonDelete>
            </UsuarioCadastrado>
          );
        })}
      </UserContainer>
    );
  }
}
export default ListaUsuarios;
