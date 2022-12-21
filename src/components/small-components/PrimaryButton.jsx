import React from "react";
import styles from "../../style";

const PrimaryButton = ({ content }) => {
  return (
    <button
      className={`${styles.btnPaddingXY} text-sm font-semibold leading-5 text-white bg-gray-900 rounded-md`}
    >
      {content}
    </button>
  );
};

export default PrimaryButton;
