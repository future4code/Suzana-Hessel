export const BASE_URL = "https://labeddit.herokuapp.com";
export const headers = {
  "Content-Type": "application/json",
  "Authorization": window.localStorage.getItem("token")
};
