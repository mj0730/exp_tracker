import NavDrawer from '../components/NavDrawer';

function Home() {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <main>
      <NavDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} />
    </main>
  );
}

export default Home;
