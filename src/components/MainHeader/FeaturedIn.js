import techCrunchLogo from '../../assets/images/logos/techcrunch.png';
import forbesLogo from '../../assets/images/logos/forbes.png';
import businessInsiderLogo from '../../assets/images/logos/business-insider.png';
import theNewYorkTimesLogo from '../../assets/images/logos/the-new-york-times.png';
import usaTodayLogo from '../../assets/images/logos/usa-today.png';

import classes from './FeaturedIn.module.css';

const FeaturedIn = props => {
  return (
    <section class={classes[`section-featured`]}>
      <div class={classes.container}>
        <h2 class={classes[`heading-featured-in`]}>As featured in</h2>
        <div class={classes.logos}>
          <img src={techCrunchLogo} alt="techcrunch logo" />
          <img src={businessInsiderLogo} alt="business insider logo" />
          <img src={theNewYorkTimesLogo} alt="NYT logo" />
          <img src={forbesLogo} alt="forbes logo" />
          <img src={usaTodayLogo} alt="usa-today logo" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
