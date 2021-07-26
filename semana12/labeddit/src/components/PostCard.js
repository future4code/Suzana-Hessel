import React, { useState, useEffect } from "react";
import {
  Title,
  ContainerPostUser,
  ContainerReactUser,
  Vote,
  Comment,
  ButtonComment,
  ContainerUser,
  BodyPost,
  ButtonUp,
  ButtonDown,
} from "./styled";
import { Link } from "react-router-dom";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { createPostVote, changePostVote } from "../services/posts";
import { createComment } from "../services/comments";
import useForm from "../hooks/useForm";
import { TextField } from "@material-ui/core";

const PostCard = (props) => {
  const voteSum = parseInt(props.voteSum, 10);
  const [votes, setVotes] = useState(voteSum);
  const [open, setOpen] = useState(false);
  const { form, onChange, clear } = useForm({
    body: "",
  });

  useEffect(() => {
    onClickUp()
    onClickDown()
  })

  const onClickUp = () => {
    console.log({ voteSum, votes });
    const id = props.id;
    const body = {
      direction: 1,
    };

    createPostVote(body, id);
    setVotes((x) => {
      console.log("X DO SET VOTES", x);
      return x + 1;
    });
  };

  const onClickDown = () => {
    const id = props.id;
    console.log("ID", props.id);
    const body = {
      direction: -1,
    };

    if (votes > 0) {
      console.log("VOTES", votes);
      console.log("VOTESUM", voteSum);
      changePostVote(body, id);
      setVotes((x) => {
        return x - 1;
      });
    }
  };

  const onClickInputComment = () => {
    setOpen(!open);
  };

  const onClickSendComment = (e) => {
    e.preventDefault();
    const id = props.id;
    createComment(form, id, clear);
  };

  return (
    <ContainerPostUser key={props.id}>
      <p>{props.username}</p>
      <Link
        to={`/login/feed/post/${props.id}`}
        style={{ textDecoration: "none" }}
      >
        <ContainerUser>
          <Title>{props.title}</Title>
          <BodyPost>{props.body}</BodyPost>
        </ContainerUser>
      </Link>
      <div>{props.createdAt}</div>
      {/* <div>{post.userId}</div> */}
      <ContainerReactUser>
        <ButtonUp>
          <button onClick={onClickUp}>
            <ThumbUpIcon />
          </button>
        </ButtonUp>
        <ButtonDown>
          <button onClick={onClickDown}>
            <ThumbDownIcon />
          </button>
        </ButtonDown>
        <Vote>
          <span>{votes ? votes : 0}curtidas</span>
        </Vote>
        <Comment>
          <span>{props.commentCount} comentários</span>
        </Comment>
        {/* {post.userVote} */}
        <ButtonComment>
          <button onClick={onClickInputComment}>Comentar</button>
        </ButtonComment>
      </ContainerReactUser>
      {open ? (
        <form onSubmit={onClickSendComment}>
          <TextField
            name="body"
            type="text"
            value={form.body}
            onChange={onChange}
            placeholder="Adicione um comentário..."
          />
          <button onClick={onClickSendComment}>Enviar</button>
        </form>
      ) : null}
    </ContainerPostUser>
  );
};
export default PostCard;
