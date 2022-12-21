import React from "react";
import styles from "../style";
import { placeholder_img } from "../assets";

const Services = () => {
  return (
    <section
      id="services"
      className={`flex flex-col justify-center items-center ${styles.sectionPaddingX} ${styles.sectionPaddingY}`}
    >
      <div className="services-headline max-w-[590px]">
        <h2 className={`${styles.heading} mb-4 text-center`}>
          Suspendisse vitae pharetra netus
        </h2>
        <p className={`${styles.subheading} text-center`}>
          At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
          cursus vestibulum, facilisi ac, sed faucibus.
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center mt-20">
        <div className="left-content w-full md:w-1/2 mr-0 md:mr-8">
          <h3 className={`${styles.heading3} mb-4`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h3>
          <p className="max-w-[590px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
            morbi sit consectetur elit nibh faucibus morbi. Sed sit eget est
            lacus.
          </p>
        </div>
        <div className="right-content w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={placeholder_img}
            alt="content image"
            className="max-h-[400px]"
          />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row-reverse items-center mt-20">
        <div className="left-content w-full md:w-1/2 ml-0 md:ml-8">
          <h3 className={`${styles.heading3} mb-4 `}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h3>
          <p className="max-w-[590px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
            morbi sit consectetur elit nibh faucibus morbi. Sed sit eget est
            lacus.
          </p>
        </div>
        <div className="right-content w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={placeholder_img}
            alt="content image"
            className="max-h-[400px] "
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
