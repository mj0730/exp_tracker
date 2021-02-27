import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, InputBase, IconButton, Divider } from '@material-ui/core';
import { Search, Close } from '@material-ui/icons/';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    maxWidth: 400,
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

const ViewSearchBar = ({ query, setQuery, setFilter }) => {
  const classes = useStyles();

  function handleChange(e) {
    const val = e.target.value;

    if (val.length > 3) {
      return;
    }

    setQuery(val);
  }

  function clearAll() {
    setFilter('');
    setQuery('');
  }

  return (
    <Paper component='form' className={classes.root}>
      <InputBase value={query} className={classes.input} placeholder='Search...' onChange={(e) => handleChange(e)} />
      <Search />
      <Divider className={classes.divider} orientation='vertical' />
      <IconButton color='secondary' className={classes.iconButton} aria-label='clear' onClick={() => clearAll()}>
        <Close />
      </IconButton>
    </Paper>
  );
};

export default ViewSearchBar;

ViewSearchBar.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
};
