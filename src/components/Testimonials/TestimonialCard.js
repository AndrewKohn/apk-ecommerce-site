import TestimonialData from './TestimonialData';

import classes from './TestimonialCard.module.css';

const TestimonialCard = props => {
  const testimonialData = new TestimonialData();

  return (
    <div className={classes[`testimonial-card`]}>
      <span>{testimonialData.getTestimonialName()}</span>
      <span>{testimonialData.getTestimonialDate()}</span>
      <span>{testimonialData.getTestimonialTitle()}</span>
      <span>{testimonialData.getTestimonialText()}</span>
    </div>
  );
};

export default TestimonialCard;
