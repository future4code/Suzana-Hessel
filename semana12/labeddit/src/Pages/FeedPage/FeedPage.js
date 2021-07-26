import React, { useState, useEffect } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import useForm from "../../hooks/useForm";
import { BASE_URL, headers } from "../../constants/urls";
import axios from "axios";
import { TextField } from "@material-ui/core";
import {
  ContainerFeed,
  ContainerPost,
  ButtonPostar,
 
} from "./styled";
import { Button } from "@material-ui/core";
import PostCard from "../../components/PostCard";
import { createPost } from "../../services/posts";

const FeedPage = () => {
  useProtectedPage();
  const [posts, setPosts] = useState([]);
  const { form, onChange, clear } = useForm({
    title: "",
    body: "",
  });

  useEffect(() => {
    getPosts();
  }, [posts]);

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
        setPosts(res.data);
      })
      .catch((err) => {
        console.log("ERROOO", err);
      });
  };

  const onClickCreatePost = () => {
  if(form.title === "" || form.body === ""){
    return alert("É necessário o preenchimento dos campos")
  }
    createPost(form, clear);
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
      <ContainerPost>
        <form onSubmit={onClickCreatePost}>
          <TextField
            name="title"
            type="title"
            value={form.title}
            onChange={onChange}
            placeholder="Título"
          />
          <TextField
            name="body"
            type="text"
            value={form.body}
            onChange={onChange}
            placeholder="Escreva seu Post"
          />
          <ButtonPostar>
            <Button onClick={onClickCreatePost}>Postar</Button>
          </ButtonPostar>
        </form>
      </ContainerPost>
      {renderPosts}
    </ContainerFeed>
  );
};
export default FeedPage;
