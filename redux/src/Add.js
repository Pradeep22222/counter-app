import React from 'react'

export const Add = ({ setCounter }) => {
  return (
    <>
      <button onClick={()=>setCounter("+")}>+</button>
    </>
  );
};
