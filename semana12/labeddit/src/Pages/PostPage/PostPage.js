import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { useParams } from "react-router-dom";
import { ContainerComments, ContainerPost } from "./styled";


const PostPage = () => {
 useProtectedPage()

 const params = useParams();
 console.log(params)

 const comments = useRequestData([],`${BASE_URL}/posts/${params.id}/comments`)

 const commentsCards = comments.map((comment) => {
   return (
     <div key={comment.id}>
       <div>{comment.body}</div>
       <div>{comment.createdAt}</div>
       {/* <div>{comment.useId}</div>
       <div>{comment.postId}</div> */}
       <div>{comment.voteSum}</div>
       <div>{comment.useVote}</div>
     </div>
   )
 })

 return (
    <ContainerPost>
      <h2>Post</h2>
      <ContainerComments>
      {commentsCards}
      </ContainerComments>
     
    </ContainerPost>
  );
};
export default PostPage;
