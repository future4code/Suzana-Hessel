import React, { useEffect, useState } from "react";
import { createCommentVote, changeCommentVote } from "../services/comments";
import { ThumbDown, ThumbUp } from "@material-ui/icons";
import { ContainerPostComment, ContainerComment, ButtonsReact, ButtonUp, ButtonDown,  Vote, Text, Date} from "./styledComments";

const CommentCard = (props) => {
  const comment = props.comment;
  const voteSum = parseInt(props.comment.voteSum, 10)
  const [votes, setVotes] = useState(voteSum);

  useEffect(() => {
    onClickUp()
    onClickDown()
  })
  
  const onClickUp = () => {
    const body = {
      direction: 1,
    };
    console.log("COMMENTID NA FUNÇÃO", comment.id);
    createCommentVote(body, comment.id);
    setVotes((x) => {
      console.log("X", x);
      return x + 1;
    });
  };
  const onClickDown = () => {
    const body = {
      direction: -1,
    };

    changeCommentVote(body, comment.id);
    if (votes > 0) {
      setVotes((x) => {
        return x - 1;
      });
    }
  };

  return (
    <ContainerPostComment>
      <ContainerComment key={comment.id}>
        <Text>{comment.body}</Text>
        <Date>{comment.createdAt}</Date>
        <ButtonsReact>
        <ButtonUp>
        <button onClick={onClickUp}>
          <ThumbUp />
        </button>
        </ButtonUp>
        <ButtonDown>
        <button onClick={onClickDown}>
          <ThumbDown />
        </button>
        </ButtonDown>
        <Vote>
          <span>{votes ? votes : 0 } curtidas</span>
        </Vote>
        </ButtonsReact>
      </ContainerComment>
      {/* <div>{comment.useId}</div> */}
      {/* <div>{comment.postId}</div> */}
      <div>{comment.useVote}</div>
    </ContainerPostComment>
  );
};
export default CommentCard;
