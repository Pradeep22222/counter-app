import React from 'react'
import { useDispatch } from 'react-redux';
import { increaseCounter } from './counterSlice';

export const Add = () => {
  const dispatch=useDispatch()
  return (
    <>
      <button onClick={()=>dispatch(increaseCounter())}>+</button>
    </>
  );
};
