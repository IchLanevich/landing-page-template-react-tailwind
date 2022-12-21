import React from "react";
import styles from "../style";
import PrimaryButton from "./small-components/PrimaryButton";
import TertiaryButton from "./small-components/TertiaryButton";

const Hero = () => {
  return (
    <section
      id="hero"
      className={`${styles.sectionPaddingY} ${styles.sectionPaddingX}`}
    >
      <div className="w-full flex flex-col items-center">
        <h1 className={`${styles.heading} max-w-[590px] mb-4 text-center`}>
          Suspendisse vitae pharetra netus
        </h1>
        <p className={`${styles.subheading} max-w-[590px] text-center`}>
          At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
          cursus vestibulum, facilisi ac, sed faucibus.
        </p>
        <div className="btn-wrapper mt-12 flex gap-4">
          <PrimaryButton content={"Primary"} />
          <TertiaryButton content={"Tertiary"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
