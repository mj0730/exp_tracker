import { useState } from 'react';
import ExpLineItem from './ExpLineItem';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from '../styles/ExpInput.module.css';

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
      <div>
        <Button onClick={addInput}>add more experience</Button>
        <Button startIcon={<DeleteIcon />} onClick={() => deleteInput()}>
          delete
        </Button>
      </div>
    </div>
  );
};

export default ExpContainer;
