import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar/Navbar";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="h-screen bg-base-300">
      <Navbar />
      <main>
        <Outlet />
        <ToastContainer
          className={"font-semibold"}
          position="bottom-center"
          theme="light"
          closeOnClick
          pauseOnHover
        />
      </main>
    </div>
  );
}

export default App;
