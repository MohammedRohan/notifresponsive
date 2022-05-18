import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SendNotification from "./Sendnotification";
import Allnotification from "./Allnotification";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/SendNotification" element={<SendNotification />} />
        <Route
          exact
          path="/SendNotification/AllNotification"
          element={<Allnotification />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
