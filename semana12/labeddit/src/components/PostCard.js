import React, { useState } from "react";
import {
  Title,
  ContainerPostUser,
  ContainerReactUser,
  Vote,
  Comment,
} from "./styled";
import { Link } from "react-router-dom";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { createPostVote, changePostVote } from "../services/posts";


const PostCard = (props) => {
const voteSum = parseInt(props.voteSum, 10)
  const [votes, setVotes] = useState(voteSum, {direction: 0});
  

  const onClickUp = () => {
    const id = props.id;
    const body = {
      direction: 1,
    };

    createPostVote(body, id);
    setVotes((x) => {
        return x + 1 
    })
  };

  const onClickDown = () => {
      const id = props.id;
      const body = {
          direction: -1,
      }

    changePostVote(body, id)
    setVotes((x) => {
        return x - 1 
    })

  }
  return (
    <ContainerPostUser key={props.id}>
      {props.username}
      <Link
        to={`/login/feed/post/${props.id}`}
        style={{ textDecoration: "none" }}
      >
        <div>
          <Title>{props.title}</Title>
          <div>{props.body}</div>
        </div>
      </Link>
      <div>{props.createdAt}</div>
      {/* <div>{post.userId}</div> */}
      <ContainerReactUser>
        <div>
          <button onClick={onClickUp}><ThumbUpIcon /></button>
        </div>
        <div>
          <button onClick={onClickDown}><ThumbUpIcon /></button>
        </div>
        <Vote>
          <span>{votes}curtidas</span>
        </Vote>
        <Comment>
          <span>{props.commentCount} comentários</span>
        </Comment>
        {/* {post.userVote} */}
      </ContainerReactUser>
    </ContainerPostUser>
  );
};
export default PostCard;
