import React from "react";
import styles from "../../style";

const PrimaryButton = ({ content }) => {
  return (
    <button
      className={`${styles.btnPaddingXY} text-sm font-semibold leading-5 text-gray-900 rounded-md hover:underline hover:underline-offset-2`}
    >
      {content}
    </button>
  );
};

export default PrimaryButton;
