import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "@pages/Login";
import PostList from "@pages/Login";
import Signup from "@pages/Signup";

import Header from "@components/Header";

import { Grid } from "../elements/index";

import UserInfoContextProvider from "@contexts/UserInfoContext";

function App() {
  return (
    <React.Fragment>
      <Grid>
        <UserInfoContextProvider>
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PostList />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </BrowserRouter>
        </UserInfoContextProvider>
      </Grid>
    </React.Fragment>
  );
}

export default App;
