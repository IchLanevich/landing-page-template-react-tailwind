import React from "react";
import styles from "../../style";
import { feature_icon } from "../../assets";

const FeatureCard = () => {
  return (
    <div className="feature-card max-w-[384px]">
      <span className="feature__icon">
        <img src={feature_icon} alt="" className="w-16 h-16 mb-6 mt-8" />
      </span>
      <h4 className={`${styles.heading4} mb-4`}>Platea lectus sit.</h4>
      <p className={`${styles.paragraph}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum
        viverra etiam.
      </p>
    </div>
  );
};

export default FeatureCard;
