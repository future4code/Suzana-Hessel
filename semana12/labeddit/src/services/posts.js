import { BASE_URL, headers } from "../constants/urls";
import axios from "axios";

export const createPost = (body, clear) => {
  axios
    .post(`${BASE_URL}/posts`, body, {
      headers: headers,
    })
    .then((res) => {
      clear();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createPostVote = (body, id) => {
  // setIsLoading(true);
  axios
    .post(`${BASE_URL}/posts/${id}/votes`, body, {
      headers: headers,
    })
    .then((res) => {
      console.log(res);
      // setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      // setIsLoading(false);
    });
};

export const changePostVote = (body, id) => {
  axios
    .put(`${BASE_URL}/posts/${id}/votes`, body, {
      headers: headers,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
