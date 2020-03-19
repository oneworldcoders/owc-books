import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import BookDetailsPage from "../pages/BookDetailsPage";
import { ToastContainer } from "react-toastify";
import Header from "../components/Navbar/Navbar";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <ToastContainer />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/details/:id" component={BookDetailsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
