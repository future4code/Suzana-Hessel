import React from "react";
// import axios from "axios";
// import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListTripsPage from "../pages/ListTripsPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import AdminHomePage from "../pages/AdminHomePage";
import CreateTripPage from "../pages/CreateTripPage";
import TripDetailsPage from "../pages/TripDetailsPage";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <HomePage />
          </Route>
          <Route exact path={"/tripList"}>
            <ListTripsPage />
          </Route>
          <Route exact path={"/loginAdm"}>
            <LoginPage />
          </Route>
          <Route exact path={"/form"}>
            <ApplicationFormPage />
          </Route>
          <Route exact path={"/adminPage"}>
            <AdminHomePage />
          </Route>
          <Route exact path={"/createTrip"}>
            <CreateTripPage />
          </Route>
          <Route exact path={"/tripDetails"}>
            <TripDetailsPage />
          </Route>
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Router;
