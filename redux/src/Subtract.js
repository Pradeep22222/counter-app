import React from "react";
import { useDispatch } from "react-redux";
import { decreaseCounter } from "./counterSlice";

export const Subtract = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={()=> dispatch(decreaseCounter())} >-</button>
    </>
  );
};
