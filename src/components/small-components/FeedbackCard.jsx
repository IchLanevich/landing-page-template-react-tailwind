import React from "react";
import { avatar } from "../../assets";

const FeedbackCard = () => {
  return (
    <div className="feedback-card w-full md:max-w-[486px] md:max-h-[184px] flex flex-col md:flex-row bg-[#F3F4F6] p-4 md:p-8 rounded-md">
      <div className="profile mr-0 md:mr-8 flex mb:6 items-start">
        <span className="avatar">
          <img src={avatar} alt="avatar" className="w-16 h-16 mr-4 md:mr-0" />
        </span>
        <div className="name-and-title my-2 md:ml-3">
          <h5 className="text-base font-semibold text-gray-900 mb-[6px]">
            Name
          </h5>
          <p className="font-normal text-sm">Director</p>
        </div>
      </div>
      <p className="review max-w-[219px] mt-4 md:mt-0">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis turpis
        nisi, justo, integer dignissim ornare leo euismod ac."
      </p>
    </div>
  );
};

export default FeedbackCard;
