import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "@pages/Login";
import PostList from "@pages/Login";
import Signup from "@pages/Signup";

import { Grid } from "../elements/index";

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
