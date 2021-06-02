import React from 'react';
import {AppCard, PageSectionContainer, } from './app-style';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';


function App() {
  return (
    <AppCard>
      <PageSectionContainer>
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://light-dad.surge.sh/img/cartoons/me-smile.png"
          nome="Suzana Pereira Hessel" 
          descricao="Oi, eu sou a Suzana. Sou formada em Licenciatura em Física pela Universidade Federal de Uberlândia. Lecionei para o ensino médio na rede pública estadual por um tempo, porém, não estava satisfeita com a área e decidi transitar de carreira. No momento, estou cursando Web Full Stack Developer na Labenu, turma Molina, com previsão de conclusão para outubro de 2021."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <CardPequeno 
          imagem="https://cdn.iconscout.com/icon/free/png-256/email-1818372-1541480.png" 
          email="E-mail : suhessel28@gmail.com" 
          
        />
        </PageSectionContainer>

        <PageSectionContainer>
        <CardPequeno 
          imagem="http://simpleicon.com/wp-content/uploads/address.png" 
          endereco="Endereço: Rua Claudio Silveira, Roosevelt, Uberlândia-MG." 
        />
        
        </PageSectionContainer>

      <PageSectionContainer>
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://projeto-cdn.infra.grancursosonline.com.br/see-mg-secretaria-de-estado-de-educacao-de-minas-gerais.png" 
          nome="Professora de Física da Rede Pública Estadual de Minas Gerais " 
          descricao="Lecionei Física e Matemática para alunos do ensino médio da rede pública." 
        />
        
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXZdtV9aI2-ElN2U1sIjRYG-l6zAEJLZcqWoh0LR7vGUTimw7&s" 
          nome="Intercâmbio na Spienza-Università di Roma " 
          descricao="Intercâmbio de Física na Università di Roma - Spienza de 2013-2014." 
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageSectionContainer>
    </AppCard>
  );
}

export default App;
