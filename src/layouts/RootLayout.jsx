import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="flex-1 w-11/12 mx-auto my-10">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <ToastContainer
        position="top-right"
        toastStyle={{
          width: "300px",
          maxWidth: "90vw",
        }}
      ></ToastContainer>
    </div>
  );
};

export default RootLayout;
