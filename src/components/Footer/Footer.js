import facebookIcon from '../../assets/images/socials/facebook.svg';
import twitterIcon from '../../assets/images/socials/twitter.svg';
import instagramIcon from '../../assets/images/socials/instagram.svg';

import classes from './Footer.module.css';
import Logo from '../UI/Logo/Logo';

const Footer = props => {
  return (
    <footer className={classes.footer}>
      <div className={classes[`footer-col`]}>
        <div>
          <Logo />
          <div className={classes[`social-links`]}>
            <a href="#">
              <img className={classes[`social-icon`]} src={facebookIcon} />
            </a>
            <a href="#">
              <img className={classes[`social-icon`]} src={twitterIcon} />
            </a>
            <a href="#">
              <img className={classes[`social-icon`]} src={instagramIcon} />
            </a>
          </div>
        </div>
        <p className={classes.copyright}>
          Copyright © 2022 by REAL Style, Inc. All Rights reserved.{' '}
        </p>
      </div>
      <div className={classes[`footer-col`]}>
        <span className={classes[`footer-heading`]}>Contact Us</span>
        <address className={classes.contacts}>
          <p className={classes.address}>
            3288 Holmes St., 8th Floor, San Francisco, CA 94107
          </p>

          <a className={classes[`footer-link`]} href="tel:415-201-6370">
            415-201-6370
          </a>
          <br />
          <a className={classes[`footer-link`]} href="mailto:">
            contact@realstyle.com
          </a>
        </address>
      </div>
      <div className={classes[`nav-col`]}>
        <span className={classes[`footer-heading`]}>Account</span>
        <ul className={classes[`footer-nav`]}>
          <li>
            <a className={classes[`footer-link`]} href="#">
              Create account
            </a>
          </li>
          <li>
            <a className={classes[`footer-link`]} href="#">
              Sign in
            </a>
          </li>
          <li>
            <a className={classes[`footer-link`]} href="#">
              iOS app
            </a>
          </li>
          <li>
            <a className={classes[`footer-link`]} href="#">
              Android app
            </a>
          </li>
        </ul>
      </div>
      <div className={classes[`nav-col`]}>
        <span className={classes[`footer-heading`]}>Company</span>
        <ul className={classes[`footer-nav`]}>
          <li>
            <a className={classes[`footer-link`]} href="#">
              About REAL Style
            </a>
          </li>
          <li>
            <a className={classes[`footer-link`]} href="#">
              For Business
            </a>
          </li>
          <li>
            <a className={classes[`footer-link`]} href="#">
              Apparel partners
            </a>
          </li>
          <li>
            <a className={classes[`footer-link`]} href="#">
              Careers
            </a>
          </li>
        </ul>
      </div>
      <div className={classes[`nav-col`]}>
        <span className={classes[`footer-heading`]}>Resources</span>
        <ul className={classes[`footer-nav`]}>
          <li>
            <a className={classes[`footer-link`]} href="#">
              Apparel directory
            </a>
          </li>
          <li>
            <a className={classes[`footer-link`]} href="#">
              Help center
            </a>
          </li>
          <li>
            <a className={classes[`footer-link`]} href="#">
              Privacy & terms
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
