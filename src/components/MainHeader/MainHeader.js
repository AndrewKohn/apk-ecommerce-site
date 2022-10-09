import { Fragment } from 'react';
import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import FeaturedIn from './FeaturedIn';

const MainHeader = props => {
  return (
    <Fragment>
      <Navigation />
      <section className={classes[`main-header`]}>
        <h1 className={classes[`primary-heading`]}>
          This is my main header section
        </h1>
      </section>
      <FeaturedIn />
    </Fragment>
  );
};

export default MainHeader;
