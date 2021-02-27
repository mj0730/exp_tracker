import NavDrawer from './NavDrawer';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';

function Layout({ children }) {
  let theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#00d1ff',
      },
    },
  });
  theme = responsiveFontSizes(theme);

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <ThemeProvider theme={theme}>
      <NavDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} />

      <div className='layout'>
        {children}

        <footer className='footer'>
          <a href='https://pointsixtyfive.com' target='_blank' rel='noopener noreferrer'>
            <img src='./circle_logo.svg' height='24px' width='24px' alt='pointSixtyFive logo' />
            pointSixtyFive.com
          </a>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default Layout;
