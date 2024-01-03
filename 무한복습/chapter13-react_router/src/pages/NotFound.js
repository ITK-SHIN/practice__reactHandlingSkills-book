import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "64",
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "black",
      }}
    >
      <h1>404</h1>
      <p>페이지를 찾을 수 없습니다.</p>
      <div className="text-center">
        <Link to="/">메인으로</Link>
      </div>
    </div>
  );
};

export default NotFound;
