import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PostList from "@pages/PostList";

import { Grid } from "@elements";

function App() {
  return (
    <React.Fragment>
      <Grid>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PostList />} />
          </Routes>
          타입스크립트로 리런치 하는 이미지매거진.
        </BrowserRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
