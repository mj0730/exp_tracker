import PropTypes from 'prop-types';
import { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton aria-label='close' className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function ViewHelp({ className }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={className}>
      <HelpOutlineIcon className={styles.help} onClick={handleClickOpen} />
      <Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open}>
        <DialogTitle id='customized-dialog-title' onClose={handleClose}>
          How to use this page.
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            By default, all items in the database are shown. To filter offers by a previous facility, type it in the
            search bar. Pressing the &lsquo;X&rsquo; will clear the filter and go back to the default display.
          </Typography>
          <Typography gutterBottom>
            Each offer lists the year the offer was given, followed by the individuals previous experience at the time
            of the offer, and finally the list of facilites that were offered.
          </Typography>
          <Typography gutterBottom>
            The previous experience lines list the name of the facility, what organization, and the type of facility
            where the individual had experience.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color='secondary'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ViewHelp;

ViewHelp.propTypes = {
  className: PropTypes.string.isRequired,
};
