import React from "react";
import styles from "../style";
import FeedbackCard from "./small-components/FeedbackCard";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className={`${styles.sectionPaddingX} ${styles.sectionPaddingY} flex flex-col justify-center items-center`}
    >
      <div className="testimonials-headline max-w-[590px] mb-20">
        <h2 className={`${styles.heading} mb-4 text-center`}>
          Suspendisse vitae pharetra netus
        </h2>
        <p className={`${styles.subheading} text-center`}>
          At lacus vitae nullasagittis scelerisque nisl. Pellentesque duis
          cursus vestibulum, facilisi ac, sed faucibus.
        </p>
      </div>
      <div className="feedbacks flex flex-col justify-center sm:w-full md:flex-row gap-8">
        <FeedbackCard />
        <FeedbackCard />
      </div>
    </section>
  );
};

export default Testimonials;
