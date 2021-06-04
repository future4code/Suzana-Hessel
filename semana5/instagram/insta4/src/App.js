import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Aninha'}
          fotoUsuario={'https://i.pinimg.com/originals/26/79/e8/2679e8eeb1bc09abb892bd7b525a96f8.jpg'}
          fotoPost={'https://i.pinimg.com/originals/5b/f0/13/5bf0134d4e9aef6bff0b33d31da2e27c.jpg'}
        />
        <Post
          nomeUsuario={'Pedrinho'}
          fotoUsuario={'https://i.pinimg.com/originals/71/e0/23/71e0234c238d782d50adb5cf0e7b4247.jpg'}
          fotoPost={'https://i.pinimg.com/originals/28/d9/cf/28d9cf83174278c70f6f658e6049dc37.jpg'}
        />
      </MainContainer>
    );
  }
}

export default App;
