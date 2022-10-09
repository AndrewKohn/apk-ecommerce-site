import classes from './App.module.css';
import MainHeader from './components/MainHeader/MainHeader';
import PreviewSection from './components/PreviewSection/PreviewSection';

function App() {
  return (
    <main className={classes.main}>
      <MainHeader />
      <PreviewSection />
    </main>
  );
}

export default App;
