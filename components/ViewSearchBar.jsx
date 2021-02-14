import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, InputBase, IconButton, Divider } from '@material-ui/core';
import { Search, Close } from '@material-ui/icons/';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const ViewSearchBar = ({ query, setQuery }) => {
  const classes = useStyles();

  function handleChange(e) {
    const val = e.target.value;

    if (val.length > 3) {
      return;
    }

    setQuery(val);
  }
  return (
    <Paper component='form' className={classes.root}>
      <InputBase value={query} className={classes.input} placeholder='Search...' onChange={(e) => handleChange(e)} />
      <IconButton type='submit' className={classes.iconButton} aria-label='search'>
        <Search />
      </IconButton>
      <Divider className={classes.divider} orientation='vertical' />
      <IconButton color='primary' className={classes.iconButton} aria-label='clear'>
        <Close />
      </IconButton>
    </Paper>
  );
};

export default ViewSearchBar;

ViewSearchBar.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func.isRequired,
};
