import classes from './Button.module.css';

const Button = props => {
  const btnStyle = props.btnSize ? `${classes['btn-sm']}` : `${classes.btn}`;

  return <button className={btnStyle}>{props.children}</button>;
};

export default Button;
