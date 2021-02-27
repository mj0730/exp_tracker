import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ViewHelp from '../components/ViewHelp';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import PageviewIcon from '@material-ui/icons/Pageview';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  navIcon: {
    color: '#00d1ff',
  },
  help: {
    color: '#ff9919',
    padding: '12px',
  },
});

function NavDrawer() {
  const page = useRouter().pathname;
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const listData = [
    {
      text: 'Home',
      icon: <HomeIcon />,
      link: '/',
    },
    {
      text: 'Add Data',
      icon: <AddBoxIcon />,
      link: '/add',
    },
    {
      text: 'View Data',
      icon: <PageviewIcon />,
      link: '/view',
    },
  ];

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {listData.map((item) => (
          <Link key={item.text} href={item.link}>
            <ListItem button>
              <ListItemIcon className={classes.navIcon}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div id='navDrawer'>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)}>
            <MenuIcon style={{ color: '#000000' }} />
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}

      {page === '/view' ? <ViewHelp className={classes.help} /> : null}
    </div>
  );
}

export default NavDrawer;
