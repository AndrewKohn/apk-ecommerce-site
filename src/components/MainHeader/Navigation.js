import classes from './Navigation.module.css';
import Button from '../UI/Button/Button';
import Logo from '../UI/Logo/Logo';

const Navigation = props => {
  return (
    <nav className={classes.nav}>
      <div className={classes[`logo-container`]}>
        <Logo />
        <Button btnSize="small">Shop</Button>
      </div>
      <ul className={classes[`nav-list`]}>
        <li>
          <a className={classes.link} href="#">
            Home
          </a>
        </li>
        <li>
          <a className={classes.link} href="#">
            Our Approach
          </a>
        </li>
        <li>
          <a className={classes.link} href="#">
            Account
          </a>
        </li>
        <li>
          <a className={classes.link} href="#">
            Cart
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
