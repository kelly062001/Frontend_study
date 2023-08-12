import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
return (
<HashRouter basename={process.env.PUBLIC_URL}>
  <Routes>
    <Route path={`${process.env.PUBLIC_URL}/`} element={<Home/>} />
    <Route path="/movie/:id" element={<Detail />} />
  </Routes>
</HashRouter>
);
}

export default App;
