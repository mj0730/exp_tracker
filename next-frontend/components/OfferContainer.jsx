import { useState, useEffect } from 'react';
import { Button, Container } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import OfferLineItem from './OfferLineItem';

function OfferContainer() {
  const [count, setCount] = useState(6);
  const [inputList, setInputList] = useState([
    <OfferLineItem key='1' />,
    <OfferLineItem key='2' />,
    <OfferLineItem key='3' />,
    <OfferLineItem key='4' />,
    <OfferLineItem key='5' />,
  ]);
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
    <Container>
      {inputList}
      <Button startIcon={<AddCircleOutlineIcon />} onClick={addInput}>
        Add More
      </Button>
      <Button startIcon={<HighlightOffIcon />} onClick={() => deleteInput()}>
        Delete
      </Button>
    </Container>
  );
}

export default OfferContainer;
