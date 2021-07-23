import { BASE_URL, headers } from "../constants/urls";
import axios from "axios";

 
 export const createPostVote = (body, id) => {
    // setIsLoading(true);
    axios
      .post(`${BASE_URL}/posts/${id}/votes`, body, headers)
      .then((res) => {
        console.log(res.data.message);
        // setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // setIsLoading(false);
      });
  };


  export const changePostVote = (body, id) => {
    axios
    .put(`${BASE_URL}/posts${id}/votes`, body, headers)
    .then((res) => {
      console.log("CHANGEEEE AQUIIII", res.data.message)
    })
    .catch((err) => {
      console.log(err)

    })

  }