import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPanel from "../components/admin panel";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminPanel />}></Route>
        <Route path="*" element={<h1>404 Page Not Found</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
