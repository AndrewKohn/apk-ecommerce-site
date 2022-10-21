import classes from './Logo.module.css';

const Logo = props => {
  return (
    <span className={classes.logo}>
      <strong className={classes[`spaced-text`]}>REAL</strong> Style
    </span>
  );
};

export default Logo;
