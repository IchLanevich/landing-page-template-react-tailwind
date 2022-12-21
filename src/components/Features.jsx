import React from "react";
import styles from "../style";
import FeatureCard from "./small-components/FeatureCard";

const Features = () => {
  return (
    <section
      id="features"
      className={`${styles.sectionPaddingY} ${styles.sectionPaddingX}`}
    >
      <div className="w-full md:w-1/2">
        <h2 className={`${styles.heading} mb-4`}>
          Suspendisse vitae pharetra netus
        </h2>
        <p className={`${styles.subheading} max-w-[540px]`}>
          At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
          cursus vestibulum, facilisi ac, sed faucibus.
        </p>
      </div>

      <div className="feature-grid grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-20 mt-20">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </section>
  );
};

export default Features;
