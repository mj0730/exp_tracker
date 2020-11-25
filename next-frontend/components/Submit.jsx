import { Box, Button } from '@material-ui/core';

function Submit({ isSubmitting, submitForm }) {
  //make box display flex, move button to bottom of box, width 100%
  return (
    <Box>
      <p>Here's what you're going to submit:</p>
      <Button variant='contained' color='primary' disabled={isSubmitting} onClick={submitForm}>
        Submit
      </Button>
    </Box>
  );
}

export default Submit;
