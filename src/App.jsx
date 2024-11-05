import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './features/couter/couterSlice';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0);
  // used useSelector hook to take value from state
  const count = useSelector((state) => state.counter.value);
  // used useDispatch to dispatch value from state 
  const dispatch = useDispatch();
  function handleIncrementClick(){
    // used reducer function to count value by 1 
    dispatch(increment());
  }
  function handleDecrementClick(){
    // used reducer function to decrease count by 1
    dispatch(decrement());
  }
  function handleResetClick(){
    dispatch(reset());
  }
  function handleIncAmountClick(){
    dispatch(incrementByAmount(amount));
  }

  return (
    <>
     <div className='container'>
        <button onClick={handleIncrementClick}> + </button>
        <p>Count: {count}</p>
        <button onClick={handleDecrementClick}> - </button>
        <br /><br />
        <button onClick={handleResetClick}> Reset </button>
        <input type="number" value={amount} placeholder='Enter Amount' onChange={(e) =>setAmount(e.target.value)}/>
        <br /><br />
        <button onClick={handleIncAmountClick}> Inc by Amount </button>
     </div>
    </>
  )
}

export default App
