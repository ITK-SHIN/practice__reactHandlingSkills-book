import React from "react";
import ColorContext, { ColorConsumer } from "../colors";
import { useContext } from "react";

const ColorBox = () => {
  const { state } = useContext(ColorContext);

  return (
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color,
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          background: state.subcolor,
        }}
      />
    </>
  );
};

export default ColorBox;
