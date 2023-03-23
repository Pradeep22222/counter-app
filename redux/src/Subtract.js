import React from "react";

export const Subtract = ({ setCounter }) => {
  return (
    <>
      <button onClick={() => setCounter("-")}>-</button>
    </>
  );
};
