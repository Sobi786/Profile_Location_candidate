import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Userform from "./components/Userform";
import Dashboard from "./components/Dashboard";
import Usermenu from "./components/Usermenu";
import Profile from "./components/Profile";
import Layout from "./Layout";
import Mapcomp from "./components/Mapcomp";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="details" element={<Usermenu />} />
          <Route path="map/:id" element={<Mapcomp />} />
          <Route path="form" element={<Userform />} />
          <Route path="profile/:id" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  </Provider>,
  document.getElementById("root")
);
