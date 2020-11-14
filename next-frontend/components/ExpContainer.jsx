import { useState, useEffect } from 'react';
import ExpLineItem from './ExpLineItem';

const ExpContainer = () => {
  const [inputList, setInputList] = useState([<ExpLineItem key='1' />]);

  const addInput = () => {
    if (inputList.length == 5) {
      alert('Please add only the five most recent facilities.');
      return;
    }
    setInputList(inputList.concat(<ExpLineItem key={inputList.length} />));
  };

  return (
    <div>
      {inputList}
      <button onClick={addInput}>add more experience</button>
    </div>
  );
};

export default ExpContainer;
// display: flex;
// width: 400px;
// justify-content: space-between;
//child width: 30%;
