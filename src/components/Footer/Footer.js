import facebookIcon from '../../assets/images/socials/facebook.svg';
import twitterIcon from '../../assets/images/socials/twitter.svg';
import instagramIcon from '../../assets/images/socials/instagram.svg';

import classes from './Footer.module.css';

const Footer = props => {
  return (
    <footer className={classes.footer}>
      <div className={classes[`footer-col`]}>
        <div>
          <p>LOGO</p>
          <div>
            <a href="#">
              <img src={facebookIcon} />
            </a>
            <a href="#">
              <img src={twitterIcon} />
            </a>
            <a href="#">
              <img src={instagramIcon} />
            </a>
          </div>
        </div>
        <p className={classes.copyright}>
          Copyright © 2022 by Omnifood, Inc. All Rights reserved.{' '}
        </p>
      </div>
      <div className={classes[`footer-col`]}>
        <p>Contact Us</p>
        <address className={classes.contacts}>
          <p className={classes.address}>
            623 Harrison St., 2nd Floor, San Francisco, CA 94107
          </p>

          <a className={classes[`footer-link`]} href="tel:415-201-6370">
            415-201-6370
          </a>
          <br />
          <a className={classes[`footer-link`]} href="mailto:">
            contact@BLAH.com
          </a>
        </address>
      </div>
      <div className={classes[`footer-col`]}>
        <div className={classes[`footer-heading`]}>Account</div>
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
      <div className={classes[`footer-col`]}>
        <div className={classes[`footer-heading`]}>Company</div>
        <ul className={classes[`footer-nav`]}>
          <li>
            <a className={classes[`footer-link`]} href="#">
              About Omnifood
            </a>
          </li>
          <li>
            <a className={classes[`footer-link`]} href="#">
              For Business
            </a>
          </li>
          <li>
            <a className={classes[`footer-link`]} href="#">
              Cooking partners
            </a>
          </li>
          <li>
            <a className={classes[`footer-link`]} href="#">
              Careers
            </a>
          </li>
        </ul>
      </div>
      <div className={classes[`footer-col`]}>
        <div className={classes[`footer-heading`]}>Resources</div>
        <ul className={classes[`footer-nav`]}>
          <li>
            <a className={classes[`footer-link`]} href="#">
              Recipe directory
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
