import TestimonialCard from './TestimonialCard';
import classes from './Testimonials.module.css';

const Testimonials = props => {
  return (
    <section className={classes[`testimonials-section`]}>
      <div className={classes[`testimonials-container`]}>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
};

export default Testimonials;
