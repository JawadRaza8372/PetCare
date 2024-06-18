import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import TNVRProgram from "../Pages/TNVRProgram";
import OurWork from "../Pages/OurWork";
import IsbToPage from "../Pages/IsbToPage";
import HopeToWalk from "../Pages/HopeToWalk";
import WingsPage from "../Pages/WingsPage";
import ScrollToTopComp from "../Components/ScrollToTopComp";

const index = () => {
  return (
    <>
      <ScrollToTopComp />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={AboutUs} />
        <Route path="/tnvr" Component={TNVRProgram} />
        <Route path="/work" Component={OurWork} />
        <Route path="/journey" Component={IsbToPage} />
        <Route path="/hope" Component={HopeToWalk} />
        <Route path="/wings" Component={WingsPage} />
      </Routes>
    </>
  );
};

export default index;
