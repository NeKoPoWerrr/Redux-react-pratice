import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment,incrementByAmount } from './counter';

const App = () => {
  const { count } = useSelector( (state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <h1>The Count is {count}</h1>
      <button onClick = {()=>{dispatch(increment())}}>
          increment
      </button>
      <button onClick = {()=>{dispatch(decrement())}}>
          decrement
      </button>
      <button onClick={() => dispatch(incrementByAmount(33))}>
        Increment by 33
      </button>
    </>
  );
}

export default App;
