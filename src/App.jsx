import React from "react";
import "./App.css";
import Navbar from "./Layouts/Navbar";
import NavRoutes from "./Routes/index";
import Footer from "./Layouts/Footer";
export default function App() {
  return (
    <>
      <Navbar />
      <NavRoutes />
      <Footer />
    </>
  );
}
