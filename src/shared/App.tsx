import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PostList from "@pages/PostList";

import Login from "@components/Login";
import Signup from "@components/Signup";

import { Grid } from "@elements";

function App() {
  return (
    <React.Fragment>
      <Grid>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
