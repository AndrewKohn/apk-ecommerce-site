import GridItem from './GridItem';
import classes from './PreviewSection.module.css';

const PreviewSection = props => {
  return (
    <section className={classes[`grid-container`]}>
      <div className={classes.grid}>
        <GridItem itemNumber="1" />
        <GridItem itemNumber="2" />
        <GridItem itemNumber="3" />
        <GridItem itemNumber="4" />
      </div>
    </section>
  );
};

export default PreviewSection;
