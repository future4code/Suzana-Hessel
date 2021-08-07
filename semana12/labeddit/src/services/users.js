import { BASE_URL } from "../constants/urls";
import axios from "axios";
import { goToFeed, goToSignupFeed } from "../routes/coordinator";


export const login = (body, clear, history, setRightButtonText) => {
  axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToFeed(history);
      setRightButtonText("Logout");
    })
    .catch((err) => {
      console.error(err)
    });
};

export const signup = (body, clear, history) => {
  axios
    .post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToSignupFeed(history);
    })
    .catch((err) => {
      console.log("Erro", err);
      console.log("ERROOO", err.response.data)
      alert("Erro no cadastro");
    });
};


