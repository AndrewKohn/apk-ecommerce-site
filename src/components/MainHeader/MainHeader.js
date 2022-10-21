import { Fragment } from 'react';
import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import FeaturedIn from './FeaturedIn';
import Button from '../UI/Button/Button';
import customer1 from '../../assets/images/customers/customer-1.jpg';
import customer2 from '../../assets/images/customers/customer-2.jpg';
import customer3 from '../../assets/images/customers/customer-3.jpg';
import customer4 from '../../assets/images/customers/customer-4.jpg';
import customer5 from '../../assets/images/customers/customer-5.jpg';
import customer6 from '../../assets/images/customers/customer-6.jpg';

const MainHeader = props => {
  return (
    <Fragment>
      <Navigation />
      <section className={classes[`hero-container`]}>
        <div className={classes[`hero-text-container`]}>
          <h1 className={classes[`primary-heading`]}>
            New brands and new styles, every month, tailored for you
          </h1>
          <p className={classes[`hero-text`]}>
            Discover new outfits, personalized to you.
          </p>
          <p className={classes[`hero-text`]}>
            {' '}
            Tell us what you like, and we'll find out what you love!
          </p>

          <div className={classes[`hero-btn-container`]}>
            <Button>Try it on</Button>
            <Button>Learn more &rarr;</Button>
          </div>

          <div className={classes[`delivered-container`]}>
            <div className={classes[`delivered-customers`]}>
              <img src={customer1} />
              <img src={customer2} />
              <img src={customer3} />
              <img src={customer4} />
              <img src={customer5} />
              <img src={customer6} />
            </div>
            <p className={classes[`delivered-text`]}>
              <span>250,000+</span> meals delivered last year!
            </p>
          </div>
        </div>
      </section>
      <FeaturedIn />
    </Fragment>
  );
};

export default MainHeader;
