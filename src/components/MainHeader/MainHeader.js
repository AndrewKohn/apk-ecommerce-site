import { Fragment } from 'react';
import Navigation from './Navigation';
import bgImg from '../../assets/images/clem-onojeghuo-4fDBYLyhqbI-unsplash.jpg';
import classes from './MainHeader.module.css';

const MainHeader = props => {
  return (
    <Fragment>
      <Navigation />
      <section className={classes[`main-header`]}>
        <h1 className={classes[`primary-heading`]}>
          This is my main header section
        </h1>
      </section>
    </Fragment>
  );
};

export default MainHeader;
