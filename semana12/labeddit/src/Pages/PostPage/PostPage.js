import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";


const PostPage = () => {
 useProtectedPage()
 
  return (
    <div>
      <h2>Post</h2>
      
    </div>
  );
};
export default PostPage;