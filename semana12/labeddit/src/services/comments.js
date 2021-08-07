import { BASE_URL, headers } from "../constants/urls";
import axios from "axios";

export const createComment = (body, id, clear) => {
  console.log("BODY", body, "ID", id);
  axios
    .post(`${BASE_URL}/posts/${id}/comments`, body, {
      headers: headers,
    })
    .then((res) => {
      clear();
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createCommentVote = (body, id) => {
  console.log("BODY COMMMMEEENNTTT", body, "ID", id);
  console.log("ID", id);
  axios
    .post(`${BASE_URL}/comments/${id}/votes`, body, {
      headers: headers,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const changeCommentVote = (body, id) => {
  console.log("BODY COMMMMEEENNTTT", body, "ID", id);
  console.log("ID", id);
  axios
    .put(`${BASE_URL}/comments/${id}/votes`, body, {
      headers: headers,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
