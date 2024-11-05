import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPanel from "../components/admin panel";
import AddWorker from "../components/addWorker";
import EditWorker from "../components/edit";
import DetailsWorker from "../components/details";
import AddTest from "../components/addWorker/testAdd";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminPanel />} />
        <Route path="/add" element={<AddTest />} />
        <Route path="worker/details/:id" element={<DetailsWorker />} />
        <Route path="worker/edit/:id" element={<EditWorker />} />
        {/* <Route path="worker/delete/:id" element={<AddWorker />} /> */}
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
