import { useState, useEffect } from 'react';
import ExpLineItem from './ExpLineItem';

const ExpContainer = () => {
  const [count, setCount] = useState(1);
  const [inputList, setInputList] = useState([<ExpLineItem key='1' />]);

  const addInput = () => {
    if (inputList.length == 5) {
      alert('Please add only the five most recent facilities.');
      return;
    }
    setCount(count + 1);
    setInputList(inputList.concat(<ExpLineItem key={count + 1} />));
  };

  const deleteInput = () => {
    if (inputList.length == 1) return;
    const temp = inputList.slice('');
    temp.pop();
    setInputList(temp);
  };

  return (
    <div>
      {inputList}
      <button onClick={addInput}>add more experience</button>
      <button onClick={() => deleteInput()}>delete</button>
    </div>
  );
};

export default ExpContainer;
// display: flex;
// width: 400px;
// justify-content: space-between;
//child width: 30%;
