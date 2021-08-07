import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "../Pages/HomePage/Home"
import GamePage from "../Pages/GamePage/GamePage"


const Router = () => {

    return (

        <BrowserRouter>
        <Switch>
            <Route exact path={"/"}>
                <Home/>
            </Route>
            <Route exact path={"/start"}>
                <GamePage/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Router;


