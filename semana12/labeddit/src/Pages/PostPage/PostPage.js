import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { useParams } from "react-router-dom";
import { ContainerComments, ContainerPost } from "./styled";
import CommentCard from "../../components/CommentCard";

const PostPage = (props) => {
  useProtectedPage();
  const params = useParams();

  const comments = useRequestData(
    [],
    `${BASE_URL}/posts/${params.id}/comments`
  );
  console.log("Comments", comments);

  const commentsCards = comments.map((comment) => {
    return <CommentCard comment={comment} />;
  });
  return (
    <ContainerPost>
      <h2>Comentários</h2>
      <ContainerComments>{commentsCards}</ContainerComments>
    </ContainerPost>
  );
};
export default PostPage;
