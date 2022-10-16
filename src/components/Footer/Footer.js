import facebookIcon from '../../assets/images/socials/facebook.svg';
import twitterIcon from '../../assets/images/socials/twitter.svg';
import instagramIcon from '../../assets/images/socials/instagram.svg';

import classes from './Footer.module.css';

const Footer = props => {
  return (
    <footer className={classes.footer}>
      <a href="#">
        <img src={facebookIcon} />
      </a>
      <a href="#">
        <img src={twitterIcon} />
      </a>
      <a href="#">
        <img src={instagramIcon} />
      </a>
    </footer>
  );
};

export default Footer;
