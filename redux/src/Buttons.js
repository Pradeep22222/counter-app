import React from 'react'
import { Add } from './Add'
import { Subtract } from './Subtract'

export const Buttons = ({ setCounter }) => {
  return (
    <div>
      <Subtract setCounter={setCounter}></Subtract>
      <Add setCounter={setCounter}></Add>
    </div>
  );
};
