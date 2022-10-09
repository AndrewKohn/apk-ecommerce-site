import { Fragment } from 'react';
import classes from './MainHeader.module.css';
import Navigation from './Navigation';

const MainHeader = props => {
  return (
    <Fragment>
      <Navigation />
      <section>
        <h1>This is my main header section</h1>
        <p>Lorema sldfkjas dlfkj</p>
      </section>
    </Fragment>
  );
};

export default MainHeader;
