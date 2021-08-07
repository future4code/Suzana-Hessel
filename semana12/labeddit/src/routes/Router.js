import { Switch, Route } from "react-router-dom";
import React from "react";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignupPage from "../Pages/SignupPage/SignupPage";
import FeedPage from "../Pages/FeedPage/FeedPage";
import PostPage from "../Pages/PostPage/PostPage";

const Router = ({rightButtonText, setRightButtonText}) => {
  return (
      <Switch>
        <Route exact path={"/"}>
          <LoginPage />
        </Route>
        <Route exact path={"/login"}>
          <LoginPage rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
        </Route>
        <Route exact path={"/login/signup/"}>
          <SignupPage />
        </Route>
        <Route exact path={"/login/feed"}>
          <FeedPage />
        </Route>
        <Route exact path={"/login/signup/feed"}>
          <FeedPage />
        </Route>
        <Route exact path={"/login/feed/post/:id"}>
          <PostPage />
        </Route>
      </Switch>
  );
};
export default Router;
