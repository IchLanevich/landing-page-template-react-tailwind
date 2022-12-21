import React from "react";
import Accordion from "./small-components/Accordion";
import { accordionData } from "../constants";
import styles from "../style";

const FAQ = () => {
  return (
    <section
      id="faq"
      className={`${styles.sectionPaddingY} ${styles.sectionPaddingX} flex flex-col justify-center items-center`}
    >
      <div className="services-headline w-full md:max-w-[590px]">
        <h2 className={`${styles.heading} mb-4 text-center`}>
          Suspendisse vitae pharetra netus
        </h2>
        <p className={`${styles.subheading} text-center`}>
          At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
          cursus vestibulum, facilisi ac, sed faucibus.
        </p>
      </div>
      <div className="accordion w-full h-full md:w-1/2 border mt-20 border-gray-200">
        {accordionData.map((data, index) => {
          return (
            <Accordion key={index} title={data.title} content={data.content} />
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
