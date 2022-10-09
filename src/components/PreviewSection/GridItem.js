import Button from '../UI/Button/Button';

import classes from './GridItem.module.css';

const GridItem = props => {
  return (
    <div className={classes[`grid-item-container`]}>
      <span className={classes[`grid-item-title`]}>
        Item {props.itemNumber}
      </span>
      <div className={classes.img}></div>
      <Button>Item {props.itemNumber}</Button>
    </div>
  );
};

export default GridItem;
