import { useState, useEffect } from 'react';
import ExpLineItem from './ExpLineItem';

//Components
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

//Icons
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

//Style
import styles from '../styles/ExpInput.module.css';

const ExpContainer = () => {
  const [count, setCount] = useState(2);
  const [inputList, setInputList] = useState([<ExpLineItem key='1' />]);
  const [disableDelete, setDisableDelete] = useState();
  const [disableAdd, setDisableAdd] = useState();

  useEffect(() => {
    inputList.length == 1 ? setDisableDelete(true) : setDisableDelete(false);
    inputList.length == 5 ? setDisableAdd(true) : setDisableAdd(false);
  }, [inputList]);

  function addInput() {
    if (inputList.length < 5) {
      setCount(count + 1);
      setInputList(inputList.concat(<ExpLineItem key={count} />));
    }
  }

  function deleteInput() {
    if (inputList.length > 1) {
      const temp = inputList.slice('');
      temp.pop();
      setCount(count - 1);
      setInputList(temp);
    }
  }

  return (
    <Box>
      {inputList}
      <Box display='flex' justifyContent='space-between'>
        <Button startIcon={<AddCircleOutlineIcon />} color='default' onClick={addInput} disabled={disableAdd}>
          Add Experience
        </Button>
        <Button startIcon={<HighlightOffIcon />} color='default' onClick={() => deleteInput()} disabled={disableDelete}>
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default ExpContainer;
