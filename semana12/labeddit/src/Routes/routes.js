import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import LoginPage from "../Pages/Login/Login";
import Feed from "../Pages/Feed/Feed"
// import { MuiPickersUtilsProvider } from "@material-ui/pickers";
// import DateFnsUtils from '@date-io/date-fns';

const Routes = () => {
  
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
            <LoginPage/>
        </Route>
        <Route> exact path={"/login/feed"}
        <Feed/>
        </Route>
      </Switch>
    </BrowserRouter>
 
};
export default Routes;


