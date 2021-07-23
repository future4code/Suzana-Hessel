import React, { useState, useEffect } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { BASE_URL, headers } from "../../constants/urls";
import axios from "axios";
import {
  ContainerFeed,
  ContainerPost,
  ContainerPostUser,
  ContainerReactUser,
  ButtonPostar,
  ButtonUser,
  Comment,
} from "./styled";
import { Button } from "@material-ui/core";
import PostCard from "../../components/PostCard";

const FeedPage = () => {
  useProtectedPage();
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    getPosts();
  });

  const getPosts = () => {
    axios
      .get(`${BASE_URL}/posts`, {
        params: {
          page: 1,
          size: 10,
        },
        headers: headers,
      })
      .then((res) => {
        // console.log("AQUIIIII RES", res);
        // console.log("AQUIIIII", res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log("ERROOO", err);
    
      });
  };

  const renderPosts = posts.map((post) => {
    return (
      <PostCard
      key={post.id}
      id={post.id}
      body={post.body}
      username={post.username}
      title={post.title}
      voteSum={post.voteSum}
      commentCount={post.commentCount}
      userVote={post.userVote}
      />
      
    );
  });

  return (
    <ContainerFeed>
      <h2>Feed</h2>
      {renderPosts}
      <ContainerPost>
        <p>Escreva seu Post</p>
        <ButtonPostar>
          <Button>Postar</Button>
        </ButtonPostar>
      </ContainerPost>
      <ContainerPostUser>
        <p>Nome de Usuário</p>
        <p>Texto do post</p>
        <ContainerReactUser>
          <ButtonUser>
            <Button>Curtir</Button>
            <Button>Descurtir</Button>
          </ButtonUser>
          <Comment>
            <p>0 comentários</p>
          </Comment>
        </ContainerReactUser>
      </ContainerPostUser>
      <ContainerPostUser>
        <p>Nome de Usuário</p>
        <p>Texto do post</p>
        <ContainerReactUser>
          <ButtonUser>
            <Button>Curtir</Button>
            <Button>Descurtir</Button>
          </ButtonUser>
          <Comment>
            <p>0 comentários</p>
          </Comment>
        </ContainerReactUser>
      </ContainerPostUser>
    </ContainerFeed>
  );
};
export default FeedPage;

