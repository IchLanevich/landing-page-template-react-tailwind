import React from "react";
import { useState } from "react";
import { FiX, FiPlus } from "react-icons/fi";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item ">
      <div
        className="accordion__title flex px-8 py-5 bg-gray-100 border-white/50"
        onClick={() => {
          setIsActive((prev) => !prev);
        }}
      >
        <p
          className={`flex-1 font-semibold text-lg ${
            isActive ? "text-gray-900" : "text-gray-500"
          }`}
        >
          {title}
        </p>
        <span className="text-xl flex items-center">
          {isActive ? <FiX /> : <FiPlus />}
        </span>
      </div>
      {isActive && (
        <div className="accordion__content px-8 py-5 font-normal text-base leading-[150%] text-gray-500 bg-white">
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
