import React from "react";
import { Outlet } from "react-router-dom";

const Bottom = () => {
  return (
    <>
      <Outlet />
      <footer>
        <div style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
          bottom
        </div>
      </footer>
    </>
  );
};

export default Bottom;
