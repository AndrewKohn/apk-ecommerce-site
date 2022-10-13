import classes from './App.module.css';
import Footer from './components/Footer/Footer';
import MainHeader from './components/MainHeader/MainHeader';
import PreviewSection from './components/PreviewSection/PreviewSection';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <main className={classes.main}>
      <MainHeader />
      <PreviewSection />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default App;
