import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Box, Button, Step, Stepper, StepLabel, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function HorizontalLabelPositionBelowStepper({ setIndexPageStep, step }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Add previous experience', 'Add offer information', 'Submit'];

  useEffect(() => {
    if (step !== activeStep) {
      setActiveStep(step);
    }
  }, [step]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setIndexPageStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setIndexPageStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setIndexPageStep(0);
  };

  return (
    <Box className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box>
        {activeStep === steps.length ? (
          <Box>
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        ) : (
          <Box>
            <Box>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.backButton}>
                Back
              </Button>

              <Button
                variant='contained'
                color='primary'
                onClick={handleNext}
                disabled={activeStep === steps.length - 1 ? true : false}
              >
                Next
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default HorizontalLabelPositionBelowStepper;

HorizontalLabelPositionBelowStepper.propTypes = {
  setIndexPageStep: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
};
